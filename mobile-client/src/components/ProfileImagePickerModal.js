import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, Easing, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { setProfileImage, setProfileImageBackgroundColor } from '../actions/UserProfileActions';
import ProfileImagePicker from '../components/ProfileImagePicker';
import ProfileIndex from '../components/ProfileIndex';
import DefaultProfilePic from '../assets/images/default-profile-img/profile-placeholder.png';
import CameraEdit from '../assets/images/CameraEdit.svg';
import CloseModal from '../assets/images/CloseIcon.svg';
import styles from '../styles/GeneralStyleSheet';

const BACKGROUND_COLORS = {
  1: '#FFCCCC',
  2: '#FFBEBC',
  3: '#FFF58A',
  4: '#BFFCC6',
  5: '#C4FAF8',
  6: '#DCD3FF',
  7: '#FFCCF9',
};

const ProfileImagePickerModal = props => {
  const [profileModal, setProfileModal] = useState(false);
  function openModal() {
    setProfileModal(true);
  }
  function closeModal() {
    setProfileModal(false);
  }
  /* Need to implement upload image to Firebase Storage
  const uploadImage = async(uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  } */
  return (
    <>
      <View style={styles.profileImage}>
        {props.profileImage ? (
          ProfileIndex.index[props.profileImage]
        ) : (
          <Image style={styles.profileImage} source={DefaultProfilePic} />
        )}
        <TouchableOpacity onPress={openModal} style={styles.profilePicEdit}>
          <CameraEdit style={{ fill: 'white' }} />
        </TouchableOpacity>
      </View>
      <Modal
        animationDuration={300}
        backButtonClose
        backdropOpacity={0.7}
        coverScreen
        easing={Easing.out(Easing.ease)}
        isOpen={profileModal}
        onClosed={closeModal}
        style={styles.backdrop}
        swipeToClose={false}
      >
        <View style={styles.innerModal}>
          <TouchableOpacity onPress={closeModal} style={{ alignSelf: 'flex-end' }}>
            <CloseModal style={{ fill: '#000000' }} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Preview</Text>
          <View style={styles.profileImage}>
            {props.profileImage ? (
              ProfileIndex.index[props.profileImage]
            ) : (
              <Image style={styles.profileImage} source={DefaultProfilePic} />
            )}
          </View>
          <Text style={styles.subtitle}>Select Background Color</Text>
          <View style={styles.backgroundColorContainer}>
            {Object.keys(BACKGROUND_COLORS).map(key => (
              <TouchableOpacity
                key={key}
                onPress={() => props.onSelectBackgroundColor(key)}
                style={styles.colorSelector}
              >
                <View style={[styles.colorSelector, { backgroundColor: BACKGROUND_COLORS[key] }]} />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.subtitle, { paddingTop: 15 }]}>Select Your Profile Image</Text>
          <View style={styles.iconContainer}>
            {Object.keys(ProfileIndex.index).map(key => (
              <TouchableOpacity
                key={key}
                onPress={() => props.onSelectImage(key)}
                style={[styles.profileImagePreview, { backgroundColor: BACKGROUND_COLORS[props.profileBgColor] }]}
              >
                {ProfileIndex.index[key]}
              </TouchableOpacity>
            ))}
          </View>
          <ProfileImagePicker />
          <TouchableOpacity style={styles.clearButton} onPress={props.onClearImage}>
            <Text>Clear Image</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  profileImage: state.userProfile.profileImage,
  profileImageURI: state.userProfile.profileImgURI,
  profileBgColor: state.userProfile.profileBgColor,
});

const mapDispatchToProps = dispatch => ({
  onSelectImage: profileImage => {
    dispatch(setProfileImage(profileImage));
  },
  onClearImage: () => {
    dispatch(setProfileImage(''));
  },
  onSelectBackgroundColor: backgroundColor => {
    dispatch(setProfileImageBackgroundColor(backgroundColor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImagePickerModal);

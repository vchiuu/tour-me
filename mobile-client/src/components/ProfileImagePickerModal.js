import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, Easing, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { setProfileImage } from '../actions/UserProfileActions';
import ProfileImagePicker from '../components/ProfileImagePicker';
import ProfileIndex from '../components/ProfileIndex';
import DefaultProfilePic from '../assets/images/default-profile-img/profile-placeholder.png';
import CameraEdit from '../assets/images/CameraEdit.svg';
import CloseModal from '../assets/images/CloseIcon.svg';
import styles from '../styles/GeneralStyleSheet';

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
          <TouchableOpacity onPress={closeModal}>
            <CloseModal />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Select Your Profile Photo</Text>
          <View style={styles.profileImage}>
            {props.profileImage ? (
              ProfileIndex.index[props.profileImage]
            ) : (
              <Image style={styles.profileImage} source={DefaultProfilePic} />
            )}
          </View>
          <View style={styles.backgroundColorContainer}>
            <Text>Placeholder Color Selector</Text>
          </View>
          <View style={styles.iconContainer}>
            {Object.keys(ProfileIndex.index).map(key => (
              <TouchableOpacity key={key} onPress={() => props.onSelectImage(key)} style={styles.profileImagePreview}>
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
});

const mapDispatchToProps = dispatch => ({
  onSelectImage: profileImage => {
    dispatch(setProfileImage(profileImage));
  },
  onClearImage: () => {
    dispatch(setProfileImage(''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImagePickerModal);

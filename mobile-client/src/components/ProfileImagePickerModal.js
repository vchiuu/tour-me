import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, Easing, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import ProfileImagePicker from '../components/ProfileImagePicker';
import ProfileIndex from '../components/ProfileIndex';
import DefaultProfilePic from '../assets/images/default-profile-img/profile-placeholder.png';
import CameraEdit from '../assets/images/CameraEdit.svg';
import styles from '../styles/GeneralStyleSheet';

const ProfileImagePickerModal = props => {
  const [profileModal, setProfileModal] = useState(false);
  function toggleModal() {
    setProfileModal(!profileModal);
  }
  return (
    <>
      <View style={styles.profileImage}>
        {props.profileImg ? (
          <Image source={{ uri: props.profileImg }} />
        ) : (
          <Image style={styles.profileImage} source={DefaultProfilePic} />
        )}
        <TouchableOpacity onPress={toggleModal} style={styles.profilePicEdit}>
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
        onClosed={toggleModal}
        style={styles.backdrop}
        swipeToClose={false}
      >
        <View style={styles.innerModal}>
          <Text style={styles.subtitle}>Select Your Profile Photo</Text>
          <View style={styles.iconContainer}>
            {Object.keys(ProfileIndex.index).map(key => (
              <TouchableOpacity key={key} onPress={() => this.onIconPress(key)} style={styles.profileImagePreview}>
                {ProfileIndex.index[key]}
              </TouchableOpacity>
            ))}
          </View>
          <ProfileImagePicker />
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  profileImage: state.userProfile.profileImg,
});

export default connect(mapStateToProps)(ProfileImagePickerModal);

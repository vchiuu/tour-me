import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, Easing, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { SvgCssUri } from 'react-native-svg';

import { setProfileImage } from '../actions/UserProfileActions';
import CameraEdit from '../assets/images/CameraEdit.svg';
import CloseModal from '../assets/images/CloseIcon.svg';
import ProfileImagePicker from '../components/ProfileImagePicker';
import styles from '../styles/GeneralStyleSheet';

const profileBackgroundColors = ['#FFCCCC', '#FFBEBC', '#FFF58A', '#BFFCC6', '#C4FAF8', '#DCD3FF', '#FFCCF9'];

const profileImages = [
  'https://tour-me-e8aac.web.app/profile-images/default-1.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-2.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-3.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-4.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-5.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-6.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-7.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-8.svg',
  'https://tour-me-e8aac.web.app/profile-images/default-9.svg',
];

const ProfileImagePickerModal = ({ profileBackgroundColor, profileImage, saveProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(profileBackgroundColor);
  const [selectedImage, setSelectedImage] = useState(profileImage);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const resetSelections = () => {
    setSelectedBackgroundColor(selectedBackgroundColor);
    setSelectedImage(profileImage);
  };

  const saveSelections = () => {
    saveProfile(selectedImage, selectedBackgroundColor);
    setIsOpen(false);
  };

  const getFileExtension = url => {
    if (!url) return '';
    return String(url).split('.').pop();
  };

  const renderSelectedProfileImage = () => {
    if (!selectedImage) {
      return (
        <Image
          source={{ uri: 'https://tour-me-e8aac.web.app/profile-images/placeholder.png' }}
          style={styles.profileImage}
        />
      );
    }
    if (getFileExtension(selectedImage).startsWith('svg')) {
      return (
        <View style={[styles.profileImage, { backgroundColor: selectedBackgroundColor }]}>
          <SvgCssUri height="100%" uri={selectedImage} width="100%" />
        </View>
      );
    }
    return <Image source={{ uri: selectedImage }} />;
  };

  const renderBackgroundColorOption = hexColor => (
    <TouchableOpacity key={hexColor} onPress={() => setSelectedBackgroundColor(hexColor)} style={styles.colorSelector}>
      <View style={[styles.colorSelector, { backgroundColor: hexColor }]} />
    </TouchableOpacity>
  );

  const renderProfileImageOption = imageUrl => {
    if (getFileExtension(imageUrl).startsWith('svg')) {
      return <SvgCssUri height="100%" uri={imageUrl} width="100%" />;
    }
    return <Image height={80} source={{ uri: imageUrl }} width={80} />;
  };

  return (
    <>
      <View style={[styles.profileImage, { backgroundColor: selectedBackgroundColor }]}>
        {renderSelectedProfileImage()}
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
        isOpen={isOpen}
        onClosed={closeModal}
        style={styles.backdrop}
        swipeToClose={false}
      >
        <View style={styles.innerModal}>
          <TouchableOpacity onPress={closeModal} style={{ alignSelf: 'flex-end' }}>
            <CloseModal style={{ fill: '#000000' }} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Preview</Text>
          <View style={styles.profileImage}>{renderSelectedProfileImage()}</View>
          <Text style={styles.subtitle}>Select Background Color</Text>
          <View style={styles.backgroundColorContainer}>
            {profileBackgroundColors.map(renderBackgroundColorOption)}
          </View>
          <Text style={[styles.subtitle, { paddingTop: 15 }]}>Select Your Profile Image</Text>
          <View style={styles.iconContainer}>
            {profileImages.map(imageUrl => (
              <TouchableOpacity
                key={imageUrl}
                onPress={() => setSelectedImage(imageUrl)}
                style={[styles.profileImagePreview, { backgroundColor: selectedBackgroundColor }]}
              >
                {renderProfileImageOption(imageUrl)}
              </TouchableOpacity>
            ))}
          </View>
          <ProfileImagePicker />
          <TouchableOpacity style={styles.clearButton} onPress={resetSelections}>
            <Text>Clear Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={saveSelections}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  profileBackgroundColor: state.userProfile.profileBackgroundColor,
  profileImage: state.userProfile.profileImage,
});

const mapDispatchToProps = dispatch => ({
  saveProfile: (profileImage, profileBackgroundColor) => {
    dispatch(setProfileImage(profileImage, profileBackgroundColor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImagePickerModal);

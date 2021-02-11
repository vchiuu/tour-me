import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, Easing, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { SvgUri } from 'react-native-svg';
import { setProfileHero } from '../actions/UserProfileActions';
import CloseModal from '../assets/images/CloseIcon.svg';
import EditButton from '../assets/images/EditButton.svg';
import styles from '../styles/GeneralStyleSheet';
import profileStyles from '../styles/ProfileStyleSheet';

const profileHero = [
  'https://tour-me-e8aac.web.app/profile-hero/hike-hero.svg',
  'https://tour-me-e8aac.web.app/profile-hero/dino-hero.svg',
  'https://tour-me-e8aac.web.app/profile-hero/gallery-hero.svg',
];

const HeroPickerModal = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(props.profileHero);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const resetSelection = () => {
    setProfileHero(selectedHero);
  };

  const saveSelection = () => {
    props.onSaveProfileHero(selectedHero);
    setIsOpen(false);
  };

  const getFileExtension = url => {
    if (!url) return '';
    return String(url).split('.').pop();
  };

  const renderProfileHeroOption = imageUrl => {
    if (getFileExtension(imageUrl).startsWith('svg')) {
      return <SvgUri height="100%" uri={imageUrl} width="100%" />;
    }
    return <Image height={80} source={{ uri: imageUrl }} width={80} />;
  };

  const renderSelectedProfileHero = () => {
    if (!selectedHero) {
      return <SvgUri uri={'https://tour-me-e8aac.web.app/profile-hero/gallery-hero.svg'} width="100%" />;
    }
    if (getFileExtension(selectedHero).startsWith('svg')) {
      return <SvgUri height="100%" uri={selectedHero} width="100%" />;
    }
    return <Image source={{ uri: selectedHero }} />;
  };

  return (
    <>
      <View style={styles.profileImage}>
        {renderSelectedProfileHero()}
        <TouchableOpacity onPress={openModal} style={profileStyles.heroEditIcon}>
          <EditButton style={{ fill: 'white' }} />
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
        <View style={[styles.innerModal, { height: 500 }]}>
          <TouchableOpacity onPress={closeModal} style={{ alignSelf: 'flex-end' }}>
            <CloseModal style={{ fill: '#000000' }} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Preview</Text>
          <View style={styles.profileHero}>{renderSelectedProfileHero()}</View>
          <Text style={[styles.subtitle, { paddingTop: 15 }]}>Select Your Profile Image</Text>
          <View style={styles.heroSelectContainer}>
            {profileHero.map(imageUrl => (
              <TouchableOpacity
                key={imageUrl}
                onPress={() => setSelectedHero(imageUrl)}
                style={styles.heroImagePreview}
              >
                {renderProfileHeroOption(imageUrl)}
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.clearButton} onPress={resetSelection}>
            <Text>Reset Hero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={saveSelection}>
            <Text>Save Hero</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  profileHero: state.userProfile.profileHero,
});

const mapDispatchToProps = dispatch => ({
  onSaveProfileHero: profileHero => {
    dispatch(setProfileHero(profileHero));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroPickerModal);

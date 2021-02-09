import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import styles from '../styles/GeneralStyleSheet';
import profileStyles from '../styles/ProfileStyleSheet';
import HomeIcon from '../assets/images/HomeIcon.svg';
import LogoutIcon from '../assets/images/LogoutIcon.svg';

const DrawerContent = ({ navigation, ...props }) => {
  const getFileExtension = url => {
    if (!url) return '';
    return String(url).split('.').pop();
  };

  const renderSelectedProfileImage = () => {
    if (!props.profileImage) {
      return (
        <Image
          source={{ uri: 'https://tour-me-e8aac.web.app/profile-images/placeholder.png' }}
          style={profileStyles.drawerProfileImage}
        />
      );
    }
    if (getFileExtension(props.profileImage).startsWith('svg')) {
      return (
        <View style={[profileStyles.drawerProfileImage, { backgroundColor: props.selectedBackgroundColor }]}>
          <SvgUri height="100%" uri={props.profileImage} width="100%" />
        </View>
      );
    }
    return <Image source={{ uri: props.profileImage }} />;
  };

  return (
    <>
      <Drawer.Section>
        <View style={[styles.drawerProfileImage, { backgroundColor: props.profileBackgroundColor }]}>
          {renderSelectedProfileImage()}
        </View>
        <Text style={[styles.subtitle, { alignSelf: 'center' }]}>
          {props.firstName} {props.lastName}
          Vivian Chiu
        </Text>
      </Drawer.Section>
      <Drawer.Section>
        <TouchableOpacity style={styles.drawerLabel} onPress={() => navigation.navigate('Home')}>
          <HomeIcon style={{ fill: '#000' }} />
          <Text style={styles.drawerLabelText}>Home</Text>
        </TouchableOpacity>
        <DrawerItem label="Profile" onPress={() => props.navigation.navigate('UserProfile')} />
      </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableOpacity style={styles.drawerLabel} onPress={() => navigation.navigate('Home')}>
          <LogoutIcon style={{ fill: '#000' }} />
          <Text style={styles.drawerLabelText}>Sign Out</Text>
        </TouchableOpacity>
        <DrawerItem label="Sign Out" onPress={()=> FirebaseFirestore.auth().signOut()} />
      </Drawer.Section>
    </>
  );
};

const mapStateToProps = state => ({
  profileBackgroundColor: state.userProfile.profileBackgroundColor,
  profileImage: state.userProfile.profileImage,
});

export default connect(mapStateToProps)(DrawerContent);

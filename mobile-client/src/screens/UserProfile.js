import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import EditButton from '../assets/images/EditButton.svg';
import ProfileImagePicker from '../components/ProfileImagePickerModal';
import styles from '../styles/GeneralStyleSheet';

const UserProfile = props => {
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.drawer}>
        <TouchableOpacity onPress={toggleEdit}>
          <EditButton />
        </TouchableOpacity>
        <ProfileImagePicker />
        <Text style={[styles.title, { paddingTop: 10 }]}>
          {props.firstName} {props.lastName}
        </Text>
        <Text style={[styles.subtitle, { alignSelf: 'center', paddingTop: 0, paddingBottom: 0 }]}> Quote </Text>
        <Text style={[styles.subtitle, { alignSelf: 'center', paddingTop: 0 }]}> Location </Text>
        {/*<Text style={[styles.subtitle, { alignSelf: 'center' }]}>{props.email}</Text>*/}
        <Text style={styles.subtitle}> Favourite Explorations </Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  firstName: state.userProfile.firstName,
  lastName: state.userProfile.lastName,
  email: state.userProfile.email,
});

export default connect(mapStateToProps)(UserProfile);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import EditButton from '../assets/images/EditButton.svg';
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
        <TouchableOpacity>
          <Image source={{ uri: 'http://example.png' }} style={styles.profileImage} />
        </TouchableOpacity>
        <Text>
          {props.firstName} {props.lastName}
        </Text>
        <Text> Location </Text>
        <Text>{props.email}</Text>
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

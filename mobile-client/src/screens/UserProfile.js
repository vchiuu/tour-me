import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import EditButton from '../assets/images/EditButton.svg';
import ProfileImagePicker from '../components/ProfileImagePickerModal';
import ContentCard from '../components/ContentCard';
import styles from '../styles/GeneralStyleSheet';

const UserProfile = props => {
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  const renderItem = ({ item }) => (
    <ContentCard title={item.title} briefDescription={item.briefDescription} lightMode={item.lightMode} />
  );

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
        {props.favoritedExplorations ? (
          <FlatList
            style={{ flexGrow: 0 }}
            horizontal={true}
            data={props.favoritedExplorations}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <View>
            <Text>You have no favourite explorations</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  firstName: state.userProfile.firstName,
  lastName: state.userProfile.lastName,
  email: state.userProfile.email,
  favoritedExplorations: state.userProfile.favouritedExplorations,
});

export default connect(mapStateToProps)(UserProfile);

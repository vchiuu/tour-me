import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { uploadProfileImage } from '../actions/UserProfileActions';
import profileStyles from '../styles/ProfileStyleSheet';

const ProfileImagePicker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permission to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!pickedImage.cancelled) {
      dispatch(uploadProfileImage(pickedImage));
    }
  };

  return (
    <View>
      <TouchableOpacity style={profileStyles.galleryButton} onPress={pickImage}>
        <Text style={profileStyles.galleryButtonText}>Select from Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImagePicker;

import React, { useState, useEffect } from 'react';
import { View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import profileStyles from '../styles/ProfileStyleSheet';

const ProfileImagePicker = () => {
  const [image, setImage] = useState(null);

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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
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

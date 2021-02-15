import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReactNativeFile } from 'apollo-upload-client';
import * as mime from 'react-native-mime-types';

import { getApolloClient } from '../graphql/client';
import { SAVE_PROFILE_INFO } from '../graphql/mutations/saveProfileInfo';
import { SAVE_PROFILE_IMAGE } from '../graphql/mutations/saveProfileImage';
import { SAVE_PROFILE_HERO } from '../graphql/mutations/saveProfileHero';
import { UPLOAD_PROFILE_IMAGE } from '../graphql/mutations/uploadProfileImage';

export const setProfileImage = createAsyncThunk(
  'SET_PROFILE_IMAGE',
  async ({ profileImage, profileBackgroundColor }) => {
    const client = await getApolloClient();
    const response = await client.mutate({
      mutation: SAVE_PROFILE_IMAGE,
      variables: {
        profileImage,
        profileBackgroundColor,
      },
    });
    return response.data.saveProfileImage;
  },
);

export const setProfileHero = createAsyncThunk('SET_PROFILE_HERO', async profileHero => {
  const client = await getApolloClient();
  const response = await client.mutate({
    mutation: SAVE_PROFILE_HERO,
    variables: {
      profileHero,
    },
  });
  return response.data.saveProfileHero;
});

export const setProfileInfo = createAsyncThunk(
  'SET_PROFILE_INFO',
  async ({ email, firstName, lastName, location, quote }) => {
    const client = await getApolloClient();
    const response = await client.mutate({
      mutation: SAVE_PROFILE_INFO,
      variables: {
        email,
        firstName,
        lastName,
        location,
        quote,
      },
    });
    return response.data.saveProfileInfo;
  },
);

export const uploadProfileImage = createAsyncThunk('UPLOAD_PROFILE_IMAGE', async image => {
  const client = await getApolloClient();
  let file = null;
  if (image && image.uri) {
    file = new ReactNativeFile({
      name: image.uri.split('/').pop(),
      type: mime.lookup(image.uri),
      uri: image.uri,
    });
  }
  const response = await client.mutate({
    mutation: UPLOAD_PROFILE_IMAGE,
    variables: { image: file },
  });
  return response.data.uploadProfileImage;
});

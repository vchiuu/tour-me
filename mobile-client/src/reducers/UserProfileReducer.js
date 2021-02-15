import { createSlice } from '@reduxjs/toolkit';
import pick from 'lodash/pick';

import { registerUser, loginUser } from '../actions/AuthenticationActions';
import { setProfileImage, setProfileHero, setProfileInfo, uploadProfileImage } from '../actions/UserProfileActions';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  location: '',
  email: '',
  isSignedIn: false,
  profileBackgroundColor: null,
  profileImage: null,
  profileHero: null,
  quote: '',
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      Object.assign(
        state,
        pick(action.payload, ['firstName', 'lastName', 'email', 'profileBackgroundColor', 'profileImage']),
      );
      state.isSignedIn = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      Object.assign(
        state,
        pick(action.payload, ['firstName', 'lastName', 'email', 'profileBackgroundColor', 'profileImage']),
      );
      state.isSignedIn = true;
    },
    [setProfileImage.fulfilled]: (state, action) => {
      Object.assign(state, pick(action.payload, ['profileBackgroundColor', 'profileImage']));
    },
    [setProfileHero.fulfilled]: (state, action) => {
      const { profileHero } = action.payload;
      state.profileHero = profileHero;
    },
    [setProfileInfo.fulfilled]: (state, action) => {
      Object.assign(state, pick(action.payload, ['email', 'firstName', 'lastName', 'location', 'quote']));
    },
    [uploadProfileImage.fulfilled]: (state, action) => {
      state.profileImage = action.payload.profileImage;
    },
  },
});

export const userProfileReducer = userProfileSlice.reducer;

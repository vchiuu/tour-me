import { createAsyncThunk } from '@reduxjs/toolkit';
import get from 'lodash/get';

import { firebase } from '../firebase/config';
import { usersRef } from '../firebase/references';
import { getApolloClient, setupApolloClient } from '../graphql/client';
import { GET_MY_ACCOUNT } from '../graphql/queries/getMyAccount';
import { loginSlice } from '../reducers/LoginReducer';

export const { toggleForm } = loginSlice.actions;

export const registerUser = createAsyncThunk(
  'REGISTER_USER',
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userData = {
        id: user.uid,
        accountType: 'USER',
        email,
        firstName,
        lastName,
      };
      await usersRef.doc(userData.id).set(userData);
      return userData;
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        return rejectWithValue('This email is already in use. Please select a different email or sign-in.');
      } else if (err.code === 'auth/invalid-email') {
        return rejectWithValue('This is an invalid email. Please select a valid email address.');
      }
      return rejectWithValue(err.message);
    }
  },
);

export const loginUser = createAsyncThunk('LOGIN_USER', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    const accessToken = await user.getIdToken();
    await setupApolloClient(accessToken);
    const client = await getApolloClient();
    const response = await client.query({ query: GET_MY_ACCOUNT });
    const userData = get(response, 'data.getMyAccount');
    if (userData) {
      return userData;
    } else {
      return rejectWithValue('User does not exist');
    }
  } catch (err) {
    if (['auth/user-not-found', 'auth/wrong-password', 'auth/invalid-email'].includes(err.code)) {
      return rejectWithValue(
        "The email address or password that you've entered does not match any account. Please try again.",
      );
    }
    return rejectWithValue(err.message);
  }
});

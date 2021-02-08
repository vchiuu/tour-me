import { getApolloClient } from '../graphql/client';
import { SAVE_PROFILE_INFO } from '../graphql/mutations/saveProfileInfo';
import { SAVE_PROFILE_IMAGE } from '../graphql/mutations/saveProfileImage';
import { SAVE_PROFILE_HERO } from '../graphql/mutations/saveProfileHero';
import createAsyncThunk from '../utils/createAsyncThunk';

export const setProfileImage = createAsyncThunk('SET_PROFILE_IMAGE', async (profileImage, profileBackgroundColor) => {
  const client = await getApolloClient();
  const response = await client.mutate({
    mutation: SAVE_PROFILE_IMAGE,
    variables: {
      profileImage,
      profileBackgroundColor,
    },
  });
  return response.data.saveProfileImage;
});

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
  async (email, firstName, lastName, location, quote) => {
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

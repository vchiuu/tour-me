import { getApolloClient } from '../graphql/client';
import { SAVE_PROFILE_IMAGE } from '../graphql/mutations/saveProfileImage';
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

import { SET_PROFILE_IMAGE } from '../graphql/queries/setProfileImage';

export const setProfileImage = uri => async dispatch => {
  dispatch({
    type: 'SET_PROFILE_IMAGE',
    payload: {
      profileImg: uri,
    },
  });
};

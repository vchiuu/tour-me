export const setProfileImage = uri => async dispatch => {
  dispatch({
    type: 'SET_PROFILE_IMAGE',
    payload: {
      profileImage: uri,
    },
  });
};

export const setProfileImageBackgroundColor = backgroundColor => async dispatch => {
  dispatch({
    type: 'SET_PROFILE_IMAGE',
    payload: {
      profileBgColor: backgroundColor,
    },
  });
};

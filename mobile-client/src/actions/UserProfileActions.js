export const setProfileImageAndColor = (profileImage, profileBackgroundColor) => async dispatch => {
  dispatch({
    type: 'SET_PROFILE_IMAGE_AND_COLOR',
    payload: {
      profileBackgroundColor,
      profileImage,
    },
  });
};

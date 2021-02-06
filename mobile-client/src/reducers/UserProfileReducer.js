const USER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  isSignedIn: false,
  profileBackgroundColor: null,
  profileImage: null,
};

export const userProfileReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        isSignedIn: true,
      };
    case 'SET_PROFILE_IMAGE_AND_COLOR':
      return {
        ...state,
        profileBackgroundColor: action.payload.profileBackgroundColor,
        profileImage: action.payload.profileImage,
      };
    default:
      return state;
  }
};

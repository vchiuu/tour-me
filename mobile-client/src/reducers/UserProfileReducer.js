const USER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  isSignedIn: false,
  isLoading: false,
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
    case 'SET_PROFILE_IMAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_PROFILE_IMAGE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profileBackgroundColor: action.payload.profileBackgroundColor,
        profileImage: action.payload.profileImage,
      };
    case 'SET_PROFILE_IMAGE_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

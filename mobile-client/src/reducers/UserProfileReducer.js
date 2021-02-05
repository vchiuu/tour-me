const USER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  isSignedIn: false,
  profileImg: '',
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
    case 'SET_PROFILE_IMAGE':
      return {
        ...state,
        profileImg: action.payload.profileImg,
      };
    default:
      return state;
  }
};

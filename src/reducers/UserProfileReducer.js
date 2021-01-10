const USER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  isSignedIn: false,
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
    default:
      return state;
  }
};

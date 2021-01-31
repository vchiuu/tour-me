const FIREBASE_AUTH_INITIAL_STATE = {
  isValidFirebaseAuth: true,
  firebaseAuthErrorMessage: '',
};

export const firebaseAuthReducer = (state = FIREBASE_AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FIREBASE_VALIDATION':
      const { isValidFirebaseAuth, firebaseAuthErrorMessage } = action.payload;
      return { ...state, isValidFirebaseAuth, firebaseAuthErrorMessage };
    default:
      return state;
  }
};

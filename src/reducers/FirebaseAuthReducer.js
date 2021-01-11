const FIREBASE_AUTH_INITIAL_STATE = {
  isValidFirebaseAuth: true,
  firebaseAuthErrorMessage: '',
};

export const firebaseAuthReducer = (state = FIREBASE_AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FIREBASE_VALIDATION':
      const isValidFirebaseAuth = action.payload.isValidFirebaseAuth;
      const firebaseAuthErrorMessage = action.payload.firebaseAuthErrorMessage;
      return { ...state, isValidFirebaseAuth, firebaseAuthErrorMessage };
    default:
      return state;
  }
};

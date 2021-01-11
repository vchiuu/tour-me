import { firebase } from '../firebase/config';
import { usersRef } from '../firebase/references';

export const toggleForm = (onLoad, formType) => async dispatch => {
  dispatch({
    type: 'TOGGLE_FORM',
    payload: {
      onLoad: onLoad,
      formType: formType,
    },
  });
  dispatch({
    type: 'FIREBASE_VALIDATION',
    payload: {
      isValidFirebaseAuth: true,
      firebaseAuthErrorMessage: '',
    },
  });
};

export const registerUser = (firstName, lastName, email, password) => async dispatch => {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userData = {
      id: user.uid,
      accountType: 'USER',
      email,
      firstName,
      lastName,
    };
    await usersRef.doc(userData.id).set(userData);
    dispatch({
      type: 'SET_USER_INFO',
      payload: {
        firstName,
        lastName,
        email,
      },
    });
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        dispatch({
          type: 'FIREBASE_VALIDATION',
          payload: {
            isValidFirebaseAuth: false,
            firebaseAuthErrorMessage: 'This email is already in use. Please select a different email or sign-in.',
          },
        });
        break;
      case 'auth/invalid-email':
        dispatch({
          type: 'FIREBASE_VALIDATION',
          payload: {
            isValidFirebaseAuth: false,
            firebaseAuthErrorMessage: 'This is an invalid email. Please select a valid email address.',
          },
        });
        break;
      default:
        console.log(err);
        break;
    }
  }
};

export const loginUser = (email, password) => async dispatch => {
  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userData = await usersRef.doc(user.uid).get();
    if (userData.exists) {
      dispatch({
        type: 'SET_USER_INFO',
        payload: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email,
        },
      });
    } else {
      throw new Error('User does not exist anymore');
    }
  } catch (err) {
    if (err.code == 'auth/user-not-found' || err.code == 'auth/wrong-password') {
      dispatch({
        type: 'FIREBASE_VALIDATION',
        payload: {
          isValidFirebaseAuth: false,
          firebaseAuthErrorMessage:
            "The email address or password that you've entered does not match any account. Please try again.",
        },
      });
    } else {
      console.log(err.code);
    }
  }
};

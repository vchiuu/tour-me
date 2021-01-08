import { firebase } from '../firebase/config';
import { usersRef } from '../firebase/references';

export const toggleForm = (onLoad, formType) => ({
  type: 'TOGGLE_FORM',
  payload: {
    onLoad: onLoad,
    formType: formType,
  },
});

export const registerUser = (firstName, lastName, email, password) => async dispatch => {
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
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
        firstName: firstName,
        lastName: lastName,
        email: email,
        isSignedIn: true,
      },
    });
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        console.log('That email address is already in use!');
        break;
      case 'auth/invalid-email':
        console.log('That email address is invalid!');
        break;
      default:
        console.log(err);
        break;
    }
  }
};

export const loginUser = (email, password) => {
  async dispatch => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      const userData = await usersRef.doc(user.uid).get();
      if (userData.exists) {
        dispatch({
          type: 'SET_USER_INFO',
          payload: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: email,
            isSignedIn: true,
          },
        });
      } else {
        throw new Error('User does not exist anymore');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

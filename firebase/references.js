import { firebase } from './config.js';

export const usersRef = firebase.firestore().collection('users');

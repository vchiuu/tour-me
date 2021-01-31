import * as admin from 'firebase-admin';

admin.initializeApp();

export const getUserFromToken = async token => {
  if (!token) {
    return null;
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const doc = await admin.firestore().doc(`users/${decodedToken.uid}`).get();
    if (doc.exists) {
      return doc.data();
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

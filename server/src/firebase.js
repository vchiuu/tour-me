import * as admin from 'firebase-admin';
import cache from 'memory-cache';

admin.initializeApp();

export const getUserFromToken = async token => {
  if (!token) {
    return null;
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userDocPath = `users/${decodedToken.uid}`;
    // Check cache for user data
    const cachedData = cache.get(userDocPath);
    if (cachedData) {
      return cachedData;
    }
    // Get user data from firestore
    const userDoc = await admin.firestore().doc(userDocPath).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      cache.put(userDocPath, userData, 1800000);
      return userData;
    }
    return null;
  } catch (error) {
    return null;
  }
};

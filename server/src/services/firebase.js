import * as admin from 'firebase-admin';
import cache from 'memory-cache';

admin.initializeApp();
export const firebaseAuth = admin.auth();
export const firebaseFirestore = admin.firestore();
export const firebaseStorage = admin.storage();
export const firebaseBucket = firebaseStorage.bucket(process.env.GOOGLE_STORAGE_BUCKET);

export const getUserFromToken = async token => {
  if (!token) {
    return null;
  }
  try {
    const decodedToken = await firebaseAuth.verifyIdToken(token);
    const userDocPath = `users/${decodedToken.uid}`;
    // Check cache for user data
    const cachedData = cache.get(userDocPath);
    if (cachedData) {
      return cachedData;
    }
    // Get user data from firestore
    const userDoc = await firebaseFirestore.doc(userDocPath).get();
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

export const getFirestoreRef = path => firebaseFirestore.doc(path);

export const uploadFileToStorage = async (path, file) =>
  new Promise(async (resolve, reject) => {
    const firebaseFile = await firebaseBucket.file(path);
    file
      .createReadStream()
      .pipe(firebaseFile.createWriteStream({ predefinedAcl: 'publicRead' }))
      .on('finish', async () => {
        const [metadata] = await firebaseFile.getMetadata();
        resolve(metadata);
      })
      .on('error', reject);
  });

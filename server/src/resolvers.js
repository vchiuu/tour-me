import { AuthenticationError, UserInputError } from 'apollo-server';
import * as admin from 'firebase-admin';
import cache from 'memory-cache';
import { urlRegex, hexColorRegex, emailRegex } from './constants';
const firebaseFirestore = admin.firestore();
// const firebaseStorage = admin.storage();
// const firebaseBucket = firebaseStorage.bucket(process.env.GOOGLE_STORAGE_BUCKET);

const resolvers = {
  Query: {
    getMyAccount: async (parent, args, context) => context.user,
  },
  Mutation: {
    saveProfileImage: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError();
      }
      if (!urlRegex.test(args.profileImage)) {
        throw new UserInputError();
      }
      if (args.profileBackgroundColor && !hexColorRegex.test(args.profileBackgroundColor)) {
        throw new UserInputError();
      }
      const userDocPath = `users/${context.user.id}`;
      const userRef = firebaseFirestore.doc(userDocPath);
      await userRef.update({
        profileBackgroundColor: args.profileBackgroundColor,
        profileImage: args.profileImage,
      });
      const userDoc = await userRef.get();
      const userData = userDoc.data();
      cache.put(userDocPath, userData, 1800000);
      return userData;
    },
    saveProfileHero: async (parent, args, context) => {
      if(!context.user) {
        throw new AuthenticationError();
      }
      if(!urlRegex.test(args.profileHero)) {
        throw new UserInputError();
      }
      const userDocPath = `users/${context.user.id}`;
      const userRef = firebaseFirestore.doc(userDocPath);
      await userRef.update({
        profileHero: args.profileHero,
      });
      return userDoc.data();
    },
    uploadProfileHero: async (parents, args, context) => {
      if(!context.user) {
        throw new AuthenticationError();
      }
      return null;
    },
    uploadProfileImage: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError();
      }
      return null;
    },
  },
};

export default resolvers;

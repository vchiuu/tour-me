import { AuthenticationError, UserInputError } from 'apollo-server';
import * as admin from 'firebase-admin';
import cache from 'memory-cache';

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
      // https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
      const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
      if (!urlRegex.test(args.profileImage)) {
        throw new UserInputError();
      }
      // https://stackoverflow.com/questions/9682709/regexp-matching-hex-color-syntax-and-shorten-form
      const hexColorRegex = /^#[0-9a-f]{3,6}$/i;
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
    uploadProfileImage: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError();
      }
      return null;
    },
  },
};

export default resolvers;

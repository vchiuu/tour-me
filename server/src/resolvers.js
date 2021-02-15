import { AuthenticationError, UserInputError } from 'apollo-server';
import { GraphQLUpload } from 'graphql-upload';
import cache from 'memory-cache';

import { getFirestoreRef } from './services/firebase';
import isHexColor from './utils/is-hex-color';
import isUrl from './utils/is-url';

const resolvers = {
  Upload: GraphQLUpload,

  Query: {
    getMyAccount: async (parent, args, context) => context.user,
  },

  Mutation: {
    saveProfileImage: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError();
      }
      if (!isUrl(args.profileImage)) {
        throw new UserInputError();
      }
      if (args.profileBackgroundColor && !isHexColor(args.profileBackgroundColor)) {
        throw new UserInputError();
      }
      const userDocPath = `users/${context.user.id}`;
      const userRef = getFirestoreRef(userDocPath);
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
      if (!context.user) {
        throw new AuthenticationError();
      }
      if (!isUrl(args.profileHero)) {
        throw new UserInputError();
      }
      const userDocPath = `users/${context.user.id}`;
      const userRef = getFirestoreRef(userDocPath);
      await userRef.update({
        profileHero: args.profileHero,
      });
      const userDoc = await userRef.get();
      return userDoc.data();
    },

    uploadProfileHero: async (parents, args, context) => {
      if (!context.user) {
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

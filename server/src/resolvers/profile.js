import { AuthenticationError, UserInputError } from 'apollo-server';
import cache from 'memory-cache';
import mimeDB from 'mime-db';

import { getFirestoreRef, uploadFileToStorage } from '../services/firebase';
import isHexColor from '../utils/isHexColor';
import isUrl from '../utils/isUrl';

const profileResolvers = {
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
      const userData = userDoc.data();
      cache.put(userDocPath, userData, 1800000);
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
      if (!args.image) {
        throw new UserInputError();
      }
      const { createReadStream, mimetype } = await args.image;
      const imageExtension = mimeDB[mimetype] ? `.${mimeDB[mimetype].extensions[0]}` : '';
      const imageFilePath = `user-profile-images/${context.user.id}${imageExtension}`;
      const uploadedImage = await uploadFileToStorage(imageFilePath, { createReadStream });
      const userDocPath = `users/${context.user.id}`;
      const userRef = getFirestoreRef(userDocPath);
      await userRef.update({
        profileImage: uploadedImage.mediaLink,
      });
      const userDoc = await userRef.get();
      const userData = userDoc.data();
      cache.put(userDocPath, userData, 1800000);
      return userData;
    },
  },
};

export default profileResolvers;

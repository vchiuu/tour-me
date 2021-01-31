import * as admin from 'firebase-admin';

const resolvers = {
  Query: {
    getMyAccount: async (parent, args, context) => {
      return context.user;
    },
  },
};

export default resolvers;

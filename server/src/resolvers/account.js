const accountResolvers = {
  Query: {
    getMyAccount: async (parent, args, context) => context.user,
  },
};

export default accountResolvers;

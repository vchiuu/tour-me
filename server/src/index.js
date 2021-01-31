import './config';
import { getUserFromToken } from './firebase';

import { ApolloServer, AuthenticationError } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  context: async ({ req }) => {
    const token = (req.headers.authorization || '').split(' ').pop();
    const user = await getUserFromToken(token);
    if (!user) {
      throw new AuthenticationError();
    }
    return { user };
  },
  cors: true,
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

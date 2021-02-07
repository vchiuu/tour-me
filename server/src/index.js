import './config';
import { getUserFromToken } from './firebase';

import { ApolloLogPlugin } from 'apollo-log';
import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  context: async ({ req }) => {
    const token = (req.headers.authorization || '').split(' ').pop();
    const user = await getUserFromToken(token);
    return { user };
  },
  cors: true,
  plugins: [ApolloLogPlugin({})],
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

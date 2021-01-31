import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    accountType: String!
    email: String!
    firstName: String
    id: String!
    lastName: String
  }

  type Query {
    getMyAccount: User
  }
`;

export default typeDefs;

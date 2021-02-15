import { gql } from 'apollo-server';

const accountTypeDefs = gql`
  type User {
    accountType: String!
    email: String!
    firstName: String
    id: String!
    lastName: String
    profileImage: String
    profileBackgroundColor: String
    profileHero: String
  }

  extend type Query {
    getMyAccount: User
  }
`;

export default accountTypeDefs;

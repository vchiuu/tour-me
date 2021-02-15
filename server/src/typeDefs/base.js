import { gql } from 'apollo-server';

const baseTypeDefs = gql`
  type Mutation {
    version: String!
  }

  type Query {
    version: String!
  }
`;

export default baseTypeDefs;

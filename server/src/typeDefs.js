import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    accountType: String!
    email: String!
    firstName: String
    id: String!
    lastName: String
    profileImg: Int
    profileImgURI: String
  }

  type Venue {
    briefDescription: String
    description: String!
    heroURI: String
    id: String!
    location: String
    name: String!
    trail: [Trail]
    type: Int!
    thumbnailURI: String
  }

  type Exhibition {
    description: String
    exhibit: [Exhibit]
    heroURI: String
    id: String!
    name: String!
    thumbnailURI: String
  }

  type Exhibit {
    artist: String
    category: String
    description: String
    heroURI: String
    id: String!
    name: String!
    marker: Int
    thumbnailURI: String
  }

  type Trail {
    briefDescription: String
    description: String
    distance: Float
    heroURI: String
    id: String!
    name: String!
    point: [Point]
    thumbnailURI: String
  }

  type Point {
    description: String
    heroURI: String
    id: String!
    marker: Int
    name: String
    thumbnailURI: String
  }

  type Query {
    getMyAccount: User
  }
`;

export default typeDefs;

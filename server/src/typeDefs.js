import { gql } from 'apollo-server';

const typeDefs = gql`
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

  type Mutation {
    saveProfileHero(profileHero: String): User
    saveProfileImage(profileImage: String!, profileBackgroundColor: String): User
    uploadProfileHero(file: Upload!): User
    uploadProfileImage(file: Upload!): User
  }
`;

export default typeDefs;

import { gql } from 'apollo-server';

const venueTypeDefs = gql`
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
`;

export default venueTypeDefs;

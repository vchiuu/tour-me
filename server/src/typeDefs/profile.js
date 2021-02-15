import { gql } from 'apollo-server';

const profileTypeDefs = gql`
  extend type Mutation {
    saveProfileHero(profileHero: String): User
    saveProfileImage(profileImage: String!, profileBackgroundColor: String): User
    uploadProfileHero(image: Upload): User
    uploadProfileImage(image: Upload): User
  }
`;

export default profileTypeDefs;

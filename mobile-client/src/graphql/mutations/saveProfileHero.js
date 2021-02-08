import { gql } from '@apollo/client';

export const SAVE_PROFILE_HERO = gql`
  mutation($profileHero: String!) {
    saveProfileHero(profileHero: $profileHero) {
      email
      firstName
      id
      lastName
      profileHero
    }
  }
`;

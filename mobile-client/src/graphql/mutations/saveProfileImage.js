import { gql } from '@apollo/client';

export const SAVE_PROFILE_IMAGE = gql`
  mutation($profileImage: String!, $profileBackgroundColor: String) {
    saveProfileImage(profileImage: $profileImage, profileBackgroundColor: $profileBackgroundColor) {
      accountType
      email
      firstName
      id
      lastName
      profileImage
      profileBackgroundColor
    }
  }
`;

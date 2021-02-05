import { gql } from '@apollo/client';

export const SET_PROFILE_IMAGE = gql`
  mutation setProfileImage($uri: String) {
    setProfileImage(uri: $uri)
  }
`;

import { gql } from '@apollo/client';

export const UPLOAD_PROFILE_IMAGE = gql`
  mutation($image: Upload) {
    uploadProfileImage(image: $image) {
      accountType
      email
      firstName
      id
      lastName
    }
  }
`;

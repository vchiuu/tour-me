import { gql } from '@apollo/client';

export const SAVE_PROFILE_INFO = gql`
  mutation($email: String, $firstName: String, $lastName: String, $location: String, $quote: String) {
    saveProfileInfo(email: $email, firstName: $firstName, lastName: $lastName, location: $location, quote: $quote) {
      accountType
      email
      firstName
      id
      lastName
      location
      quote
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_MY_ACCOUNT = gql`
  query {
    getMyAccount {
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

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';
import Constants from 'expo-constants';

let client = null;

export const setupApolloClient = async accessToken => {
  if (accessToken) {
    await AsyncStorage.setItem('accessToken', String(accessToken));
  }
  const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('accessToken');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  const uploadLink = createUploadLink({
    uri: Constants.manifest.extra.apolloServerUri,
  });
  const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };
  client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    link: ApolloLink.from([authLink, uploadLink]),
  });
  return client;
};

export const getApolloClient = async () => {
  if (client) {
    return client;
  }
  const token = await AsyncStorage.getItem('accessToken');
  if (token) {
    return setupApolloClient(token);
  }
  return null;
};

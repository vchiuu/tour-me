import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

let client = null;

export const setupApolloClient = async accessToken => {
  if (accessToken) {
    await AsyncStorage.setItem('accessToken', String(accessToken));
  }
  const httpLink = createHttpLink({
    uri: Constants.manifest.extra.apolloServerUri,
  });
  const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('accessToken');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
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
    link: authLink.concat(httpLink),
    defaultOptions: defaultOptions,
  });
  return client;
};

export const getApolloClient = () => {
  if (client) {
    return client;
  }
  const token = AsyncStorage.getItem('accessToken');
  if (token) {
    return setupApolloClient(token);
  }
  return null;
};

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

let client = null;

export const setupApolloClient = async accessToken => {
  if (accessToken) {
    await AsyncStorage.clear();
    await AsyncStorage.setItem('accessToken', accessToken);
  }
  const httpLink = createHttpLink({
    uri: 'http://192.168.0.24:4000/graphql',
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
  client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
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

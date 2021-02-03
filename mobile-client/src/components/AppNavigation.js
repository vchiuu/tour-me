import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApolloProvider } from '@apollo/client';

import { getApolloClient } from '../graphql/client';

import DrawerContent from './DrawerContent';

import Landing from '../screens/Landing';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Venue from '../screens/Venue';
import UserProfile from '../screens/UserProfile';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = ({ isSignedIn }) => {
  const DrawerRoutes = () => (
    <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Venue" component={Venue} options={{ headerShown: false }} />
      <Drawer.Screen name="UserProfile" component={UserProfile} />
    </Drawer.Navigator>
  );

  if (isSignedIn) {
    return (
      <ApolloProvider client={getApolloClient()}>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={DrawerRoutes} options={{ headerShown: false }} />
          <RootStack.Screen name="Venue" component={Venue} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </ApolloProvider>
    );
  }

  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <RootStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.userProfile.isSignedIn,
});

export default connect(mapStateToProps)(AppNavigation);

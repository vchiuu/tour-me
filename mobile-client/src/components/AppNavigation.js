import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApolloProvider } from '@apollo/client';

import DrawerContent from './DrawerContent';

import Landing from '../screens/Landing';
import SignIn from '../screens/SignIn';
// import Home from '../screens/Home';
import Venue from '../screens/Venue';

import { getApolloClient } from '../graphql/client';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = props => {
  const DrawerRoutes = () => (
    <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />}>
      {/*<Drawer.Screen name="Home" component={Home} />*/}
      <RootStack.Screen name="Venue" component={Venue} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );

  return (
    <RootStack.Navigator>
      {props.isSignedIn ? (
        <ApolloProvider client={getApolloClient()}>
          <React.Fragment>
            <RootStack.Screen name="Home" component={DrawerRoutes} options={{ headerShown: false }} />
            <RootStack.Screen name="Venue" component={Venue} options={{ headerShown: false }} />
          </React.Fragment>
        </ApolloProvider>
      ) : (
        <React.Fragment>
          <RootStack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <RootStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        </React.Fragment>
      )}
    </RootStack.Navigator>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.userProfile.isSignedIn,
});

export default connect(mapStateToProps)(AppNavigation);

import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';

import Landing from '../screens/Landing';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = props => {

  const DrawerRoutes = () => (
    <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
  return (
    <RootStack.Navigator>
      {props.isSignedIn ? (
        <React.Fragment>
          <RootStack.Screen name="Home" component={DrawerRoutes} options={{ headerShown: false }} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RootStack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <RootStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <RootStack.Screen name="Home" component={DrawerRoutes} options={{ headerShown: false }} />
        </React.Fragment>
      )}
    </RootStack.Navigator>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.userProfile.isSignedIn,
});

export default connect(mapStateToProps)(AppNavigation);

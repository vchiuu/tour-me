import React, {useState, useEffect, useContext} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Landing, SignIn, SignUp, Home } from '../screens';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const DrawerRoutes = () => {
        return (
            <Drawer.Navigator drawerPosition='right' drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        )
    }
    return (
        <RootStack.Navigator>
            {(isSignedIn) ? (
            <>
                <RootStack.Screen name="Home" component={DrawerRoutes} options={{headerShown: false}} />
            </>
            ) : (
            <>
                <RootStack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
                <RootStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
                <RootStack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            </>
            )}
        </RootStack.Navigator>
    )
}

export default AppNavigation; 
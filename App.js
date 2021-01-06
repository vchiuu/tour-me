import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './components/AppNavigation';

const getFonts = () => Font.loadAsync({
  'AirbnbCereal-Light': require('./assets/fonts/AirbnbCereal-Light.ttf'),
  'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCereal-Medium.ttf'), 
  'AirbnbCereal-Book': require('./assets/fonts/AirbnbCereal-Book.ttf'), 
  'AirbnbCereal-Black': require('./assets/fonts/AirbnbCereal-Black.ttf'), 
  'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
  'AirbnbCereal-ExtraBold': require('./assets/fonts/AirbnbCereal-ExtraBold.ttf')
});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=> {

  }, [])

  if (fontsLoaded) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <AppNavigation/>
        </NavigationContainer>
      </SafeAreaView>
    );
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
      onError={console.log}/>
    )
  }
}

export default App; 
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './components/AppNavigation';

const getFonts = () => Font.loadAsync({
  'NotoSansJP-Thin': require('./assets/fonts/NotoSansJP-Thin.otf'),
  'NotoSansJP-Light': require('./assets/fonts/NotoSansJP-Light.otf'), 
  'NotoSansJP-Regular': require('./assets/fonts/NotoSansJP-Regular.otf'), 
  'NotoSansJP-Medium': require('./assets/fonts/NotoSansJP-Medium.otf'), 
  'NotoSansJP-Bold': require('./assets/fonts/NotoSansJP-Bold.otf'),
  'NotoSansJP-Black': require('./assets/fonts/NotoSansJP-Black.otf')
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
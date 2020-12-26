import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'NotoSansJP-Thin': require('./assets/fonts/NotoSansJP-Thin.otf'),
  'NotoSansJP-Light': require('./assets/fonts/NotoSansJP-Light.otf'), 
  'NotoSansJP-Regular': require('/assets/fonts/NotoSansJP-Regular.otf'), 
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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  } else {
    <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}/>
  }
}

export default App; 
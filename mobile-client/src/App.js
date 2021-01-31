import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './components/AppNavigation';
import configureStore from './configureStore';

const getFonts = () =>
  Font.loadAsync({
    'AirbnbCereal-Light': require('./assets/fonts/AirbnbCereal-Light.ttf'),
    'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCereal-Medium.ttf'),
    'AirbnbCereal-Book': require('./assets/fonts/AirbnbCereal-Book.ttf'),
    'AirbnbCereal-Black': require('./assets/fonts/AirbnbCereal-Black.ttf'),
    'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    'AirbnbCereal-ExtraBold': require('./assets/fonts/AirbnbCereal-ExtraBold.ttf'),
  });

const store = configureStore();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.error} />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

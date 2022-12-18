import React from 'react';
import {useEffect} from 'react';
//Splashscreen
import SplashScreen from 'react-native-splash-screen';
//Styling
import {ThemeProvider} from 'styled-components';
import {theme} from './src/styles/theme';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {LandingNavigator} from './src//navigation/LandingNavigator';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <LandingNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

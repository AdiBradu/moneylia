import React from 'react';
import {useEffect} from 'react';
//Splashscreen
import SplashScreen from 'react-native-splash-screen';
//Styling
import {ThemeProvider} from 'styled-components';
import {theme} from './src/styles/theme';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
//Redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

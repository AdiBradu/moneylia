import React from 'react';
import {View} from 'react-native';
import {useEffect} from 'react';
//Splashscreen
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return <View></View>;
};

export default App;

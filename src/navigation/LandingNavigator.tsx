import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Coponents
import {LandingScreen} from '../screens/landing/LandingScreen';
//Types
import {LandingStackParamList} from '../types/types';
//Navigation
import {RootNavigator} from './RootNavigator';

const RootStack = createNativeStackNavigator<LandingStackParamList>();

export const LandingNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Root"
        component={RootNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

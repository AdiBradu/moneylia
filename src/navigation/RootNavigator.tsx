import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Coponents
import {LandingScreen} from '../screens/landing/LandingScreen';
import {PaymentScreen} from '../screens/payment/PaymentScreen';
import {PaymentDetails} from '../components/payment/PaymentDetails';
//Types
import {RootStackParamList} from '../types/types';
//Navigation
import {TabNavigator} from './TabNavigator';

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Root.Navigator initialRouteName="Login">
      <Root.Screen
        name="Login"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Root.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Root.Screen
        name="Payment"
        component={PaymentScreen}
        options={({navigation}) => ({
          headerShown: true,
          title: 'Payment details',
          header: props => (
            <PaymentDetails
              {...props}
              onPress={() => navigation.goBack(null)}
            />
          ),
        })}
      />
    </Root.Navigator>
  );
};

import React from 'react';
//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Types
import {RootStackParamList} from '../types/types';
//Components
import {DashboardScreen} from '../screens/dashboard/DashboardScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

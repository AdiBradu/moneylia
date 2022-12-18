import React from 'react';
//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Types
import {RootStackParamList} from '../types/types';
//Components
import {BottomTabBar} from '../components/navigation/BottomTabBar';
import {TabBarIcon} from '../components/navigation/TabBarIcon';
//Utils
import {ROOT_SCREENS} from '../utils/screens';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: {
          height: 69,
          paddingBottom: 16,
          paddingTop: 0,
          justifyContent: 'space-evenly',
        },
        headerShown: false,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      {ROOT_SCREENS.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          options={() => ({
            tabBarIcon: ({color}) => <TabBarIcon color={color} />,
            tabBarLabel: item.name,
          })}>
          {item.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

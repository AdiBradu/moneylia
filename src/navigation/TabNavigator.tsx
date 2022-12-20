import React from 'react';
//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Types
import {TabStackParamList} from '../types/types';
//Components
import {BottomTabBar} from '../components/navigation/BottomTabBar';
import {TabBarIcon} from '../components/navigation/TabBarIcon';
import {TabBarLabel} from '../components/navigation/TabBarLabel';
//Utils
import {ROOT_SCREENS} from '../utils/screens';

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator: React.FC = () => {
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
            tabBarLabel: ({color}) => (
              <TabBarLabel color={color} route={item.name} />
            ),
          })}>
          {item.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

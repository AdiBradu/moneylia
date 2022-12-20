import React from 'react';
//Components
import {DashboardScreen} from '../screens/dashboard/DashboardScreen';
import {ExtractScreen} from '../screens/extract/ExtractScreen';
import {PagopaScreen} from '../screens/pagopa/PagopaScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {DashboarIcon} from '../assets/icons/DashboarIcon';
import {ExtractIcon} from '../assets/icons/ExtractIcon';
import {PagoPAIcon} from '../assets/icons/PagoPAIcon';
import {ProfieIcon} from '../assets/icons/ProfieIcon';
//Types
import {TabStackParamList} from '../types/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface ROOT_SCREENS_PROPS {
  name: keyof TabStackParamList;
  component: (props: any) => JSX.Element;
  icon: JSX.Element;
}

export const ROOT_SCREENS: ROOT_SCREENS_PROPS[] = [
  {
    name: 'Dashboard',
    component: (
      props: NativeStackScreenProps<TabStackParamList, 'Dashboard'>,
    ) => <DashboardScreen {...props} />,
    icon: <DashboarIcon />,
  },
  {
    name: 'Extract',
    component: (
      props: NativeStackScreenProps<TabStackParamList, 'Extract'>,
    ) => <ExtractScreen {...props} />,
    icon: <ExtractIcon />,
  },
  {
    name: 'PagoPA',
    component: (props: NativeStackScreenProps<TabStackParamList, 'PagoPA'>) => (
      <PagopaScreen {...props} />
    ),
    icon: <PagoPAIcon />,
  },
  {
    name: 'Profile',
    component: (
      props: NativeStackScreenProps<TabStackParamList, 'Profile'>,
    ) => <ProfileScreen {...props} />,
    icon: <ProfieIcon />,
  },
];

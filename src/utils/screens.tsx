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
import {RootStackParamList} from '../types/types';

interface ROOT_SCREENS_PROPS {
  name: keyof RootStackParamList;
  component: () => JSX.Element;
  icon: JSX.Element;
}

export const ROOT_SCREENS: ROOT_SCREENS_PROPS[] = [
  {
    name: 'Dashboard',
    component: () => <DashboardScreen />,
    icon: <DashboarIcon />,
  },
  {
    name: 'Extract',
    component: () => <ExtractScreen />,
    icon: <ExtractIcon />,
  },
  {
    name: 'PagoPA',
    component: () => <PagopaScreen />,
    icon: <PagoPAIcon />,
  },
  {
    name: 'Profile',
    component: () => <ProfileScreen />,
    icon: <ProfieIcon />,
  },
];

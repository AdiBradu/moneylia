import React from 'react';
//Types
import {TabBarIconProps} from '../../types/types';
//Components
import {DashboarIcon} from '../../assets/icons/DashboarIcon';
import {ExtractIcon} from '../../assets/icons/ExtractIcon';
import {PagoPAIcon} from '../../assets/icons/PagoPAIcon';
import {ProfieIcon} from '../../assets/icons/ProfieIcon';

export const TabBarIcon: React.FC<TabBarIconProps> = ({color, route}) => {
  if (route === 'Extract') {
    return <ExtractIcon color={color} />;
  }

  if (route === 'PagoPA') {
    return <PagoPAIcon color={color} />;
  }

  if (route === 'Profile') {
    return <ProfieIcon color={color} />;
  }

  return <DashboarIcon color={color} />;
};

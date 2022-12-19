import React from 'react';
//Styling
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';
import {NavigationHeader} from '../../components/navigation/NavigationHeader';
import {DashboardContent} from '../../components/dashboard/DashboardContent';

export const DashboardScreen: React.FC = () => {
  return (
    <LayoutDefault
      scrollViewBackground={theme.colors.pale}
      statusBarBackground={theme.colors.primary}>
      <NavigationHeader background={theme.colors.primary} />
      <DashboardContent />
    </LayoutDefault>
  );
};

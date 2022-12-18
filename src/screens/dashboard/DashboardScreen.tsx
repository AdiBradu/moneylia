import React from 'react';
import {Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';
import {NavigationHeader} from '../../components/navigation/NavigationHeader';

export const DashboardScreen: React.FC = () => {
  return (
    <LayoutDefault
      scrollViewBackground={theme.colors.pale}
      statusBarBackground={theme.colors.primary}>
      <NavigationHeader background={theme.colors.primary} />
      <Text>Dashboard</Text>
    </LayoutDefault>
  );
};

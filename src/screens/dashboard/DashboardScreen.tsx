import React from 'react';
import {Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';

export const DashboardScreen: React.FC = () => {
  return (
    <LayoutDefault
      scrollViewBackground={theme.colors.pale}
      statusBarBackground={theme.colors.primary}>
      <Text>Dashboard</Text>
    </LayoutDefault>
  );
};

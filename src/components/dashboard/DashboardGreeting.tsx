import React from 'react';
import {View} from 'react-native';
//Components
import {DashboardGreetingTitle} from './DashboardGreetingTitle';
import {DashboardGreetingSubtitle} from './DashboardGreetingSubtitle';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';

const StyledView = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DashboardGreeting = () => {
  return (
    <StyledView>
      <DashboardGreetingTitle />
      <DashboardGreetingSubtitle />
    </StyledView>
  );
};

import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {DashboardGreeting} from './DashboardGreeting';
import {DashboardTopLayer} from './DashboardTopLayer';
import {DashboardSummary} from './summary/DashboardSummary';
import {DashboardContributions} from './contributions/DashboardContributions';

const StyledView = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 16px 16px;
`;

export const DashboardContent = () => {
  return (
    <StyledView>
      <DashboardTopLayer />
      <StyledContainer>
        <DashboardGreeting />
        <DashboardSummary />
        <DashboardContributions />
      </StyledContainer>
    </StyledView>
  );
};

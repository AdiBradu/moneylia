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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledContaner = styled(View)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const DashboardContent = () => {
  return (
    <StyledView>
      <DashboardTopLayer />
      <StyledContaner>
        <DashboardGreeting />
        <DashboardSummary />
        <DashboardContributions />
      </StyledContaner>
    </StyledView>
  );
};

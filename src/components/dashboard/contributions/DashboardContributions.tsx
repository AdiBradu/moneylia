import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {ContributionsHeader} from './ContributionsHeader';
import {ContributionsList} from './ContributionsList';

const StyledView = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const DashboardContributions: React.FC = () => {
  return (
    <StyledView>
      <ContributionsHeader />
      <ContributionsList />
    </StyledView>
  );
};

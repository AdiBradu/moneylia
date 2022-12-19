import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
//components
import {SummaryHeader} from './SummaryHeader';
import {SummaryList} from './SummaryList';

const StyledView = styled(View)`
  height: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: ${theme.colors.white};
  margin-top: 22px;
  border-radius: 12px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
`;

export const DashboardSummary: React.FC = () => {
  return (
    <StyledView>
      <SummaryHeader />
      <SummaryList />
    </StyledView>
  );
};

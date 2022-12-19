import React from 'react';
import {Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';

const StyledText = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.5px;
  color: ${theme.colors.white};
`;

export const DashboardGreetingSubtitle = () => {
  return <StyledText>Welcome in Moneylia</StyledText>;
};

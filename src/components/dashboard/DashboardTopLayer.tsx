import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';

const StyledView = styled(View)`
  width: 100%;
  height: 193px;
  background-color: ${theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
export const DashboardTopLayer = () => {
  return <StyledView />;
};

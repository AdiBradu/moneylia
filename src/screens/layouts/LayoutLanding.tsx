import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Utils
import metrics from '../../utils/metrics';
//Types
import {LayoutLandingProps} from '../../types/types';

const StyledView = styled(View)<LayoutLandingProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  height: ${metrics.screenHeight}px;
`;

export const LayoutLanding: React.FC<LayoutLandingProps> = ({
  children,
  background,
}) => {
  return <StyledView background={background}>{children}</StyledView>;
};

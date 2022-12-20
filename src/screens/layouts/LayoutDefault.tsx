import React from 'react';
import {View, ScrollView} from 'react-native';
//Styling
import styled from 'styled-components';
//Utils
import metrics from '../../utils/metrics';
//Types
import {LayoutDefaultProps, ScrollViewProps} from '../../types/types';

const StyledScrollView = styled(ScrollView)<ScrollViewProps>`
  background-color: ${props => props.background};
  position: relative;
  height: ${metrics.screenHeight}px;
`;

const StyledView = styled(View)<LayoutDefaultProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 93px;
`;

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({
  children,
  background,
}) => {
  return (
    <StyledScrollView
      contentInsetAdjustmentBehavior="automatic"
      background={background}>
      <StyledView>{children}</StyledView>
    </StyledScrollView>
  );
};

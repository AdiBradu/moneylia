import React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, StatusBar, View, ScrollView} from 'react-native';
//Styling
import styled from 'styled-components';
//Utils
import metrics from '../../utils/metrics';
//Types
import {LayoutDefaultProps, ScrollViewProps} from '../../types/types';

const StyledScrollView = styled(ScrollView)<ScrollViewProps>`
  background-color: ${props => props.scrollViewBackground};
`;

const StyledView = styled(View)<LayoutDefaultProps>`
  display: flex;
  height: ${metrics.screenHeight}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({
  children,
  statusBarBackground,
  scrollViewBackground,
}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={statusBarBackground} />
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        scrollViewBackground={scrollViewBackground}>
        <StyledView>{children}</StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

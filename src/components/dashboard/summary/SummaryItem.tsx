import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {ItemKey} from '../ItemKey';
import {ItemValue} from '../ItemValue';

interface ContainerProps {
  width: string;
  paddingLeft: string;
}

interface SummaryItemProps {
  width: string;
  paddingLeft: string;
  itemKey: string;
  itemValue: string;
}

const StyledView = styled(View)<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin-top: 16px;
  padding-left: ${props => props.paddingLeft};
`;

export const SummaryItem: React.FC<SummaryItemProps> = ({
  paddingLeft,
  width,
  itemKey,
  itemValue,
}) => {
  return (
    <StyledView width={width} paddingLeft={paddingLeft}>
      <ItemKey text={itemKey} />
      <ItemValue text={itemValue} />
    </StyledView>
  );
};

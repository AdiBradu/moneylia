import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {ItemKey} from '../ItemKey';
import {ItemValue} from '../ItemValue';

interface ContainerProps {
  width: string;
}

interface SummaryItemProps {
  width: string;
  itemKey: string;
  itemValue: string;
}

const StyledView = styled(View)<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin-top: 16px;
`;

export const SummaryItem: React.FC<SummaryItemProps> = ({
  width,
  itemKey,
  itemValue,
}) => {
  return (
    <StyledView width={width}>
      <ItemKey text={itemKey} />
      <ItemValue text={itemValue} />
    </StyledView>
  );
};

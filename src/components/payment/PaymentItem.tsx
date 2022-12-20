import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';

interface PaymentItemProps {
  itemKey: any | null;
  itemValue: any | null;
}

const StyledView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

const StyledItemKey = styled(Text)`
  font-family: 'WorkSans-SemiBold';
  font-size: 16px;
  line-height: 19.2px;
  color: #312e43;
  text-transform: capitalize;
  margin-top: 16px;
`;

const StyledItemValue = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 16px;
  line-height: 19.2px;
  color: #6f6d7b;
  margin-top: 4px;
`;

const StyledDividerView = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.divider};
`;

export const PaymentItem: React.FC<PaymentItemProps> = ({
  itemKey,
  itemValue,
}) => {
  return (
    <StyledView>
      <StyledDividerView />
      <StyledItemKey>{itemKey}</StyledItemKey>
      <StyledItemValue>{itemValue}</StyledItemValue>
    </StyledView>
  );
};

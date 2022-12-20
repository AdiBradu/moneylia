import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Navigation
import {RouteProp, useRoute} from '@react-navigation/native';
//Components
import {ButtonPayNow} from '../buttons/ButtonPayNow';
//Types
import type {RootStackParamList} from '../../types/types';

const StyledView = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  position: absolute;
  width: 100%;
  height: 122px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.divider};
`;

const StyledTotalView = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledTotalText = styled(Text)`
  font-family: 'WorkSans-SemiBold';
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.darkViolet};
`;

const StyledAmountText = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.error};
  text-align: right;
`;

export const PaymentPayNow: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Payment'>>();
  const {price} = route.params;

  return (
    <StyledView>
      <StyledTotalView>
        <StyledTotalText>Total due</StyledTotalText>
        <StyledAmountText>€ {price}.99</StyledAmountText>
      </StyledTotalView>
      <ButtonPayNow />
    </StyledView>
  );
};

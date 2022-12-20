import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {PaymentHeader} from './PaymentHeader';
import {PaymentList} from './PaymentList';
import {PaymentPayNow} from './PaymentPayNow';

const StyledView = styled(View)`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px 0px 138px 0px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
`;

export const PaymentContent: React.FC = () => {
  return (
    <StyledView>
      <PaymentHeader />
      <PaymentList />
      <PaymentPayNow />
    </StyledView>
  );
};

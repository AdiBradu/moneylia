import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {PagopaTitle} from './PagopaTitle';
import {PagopaSubtitle} from './PagopaSubtitle';
import {PaymentsList} from './PaymentsList';

const StyledView = styled(View)`
  width: 100%;
  height: 100%;
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PagopaContent: React.FC = () => {
  return (
    <StyledView>
      <PagopaTitle />
      <PagopaSubtitle />
      <PaymentsList />
    </StyledView>
  );
};

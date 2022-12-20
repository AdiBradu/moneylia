import React from 'react';
import {View, Text} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
import styled from 'styled-components';
//Assets
import {PagoPAIcon} from '../../assets/icons/PagoPAIcon';

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 84px;
  padding: 0px 16px;
`;

const StyledText = styled(Text)`
  font-family: 'WorkSans-SemiBold';
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.violet};
`;

const StyledPagopaIcon = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  width: 40px;
  height: 40px;
  background: rgba(0, 102, 204, 0.1);
  border-radius: 4px;
`;

export const PaymentHeader: React.FC = () => {
  return (
    <StyledView>
      <StyledText>Payment notice</StyledText>
      <StyledPagopaIcon>
        <PagoPAIcon color={theme.colors.pagopa} />
      </StyledPagopaIcon>
    </StyledView>
  );
};

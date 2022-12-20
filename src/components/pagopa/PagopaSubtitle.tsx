import React from 'react';
import {View, Text} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
import styled from 'styled-components';

const StyledText = styled(Text)`
  font-family: 'Rubik-Regular';
  font-size: 14px;
  line-height: 21px;
  color: ${theme.colors.copy};
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const PagopaSubtitle: React.FC = () => {
  return (
    <View>
      <StyledText>
        View pending transactions for the past two years and proceed to payment
      </StyledText>
    </View>
  );
};

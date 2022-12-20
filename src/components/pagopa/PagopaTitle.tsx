import React from 'react';
import {View, Text} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
import styled from 'styled-components';

const StyledText = styled(Text)`
  font-family: 'WorkSans-SemiBold';
  font-size: 24px;
  line-height: 28.8px;
  color: ${theme.colors.violet};
`;

export const PagopaTitle: React.FC = () => {
  return (
    <View>
      <StyledText>Movements to pay</StyledText>
    </View>
  );
};

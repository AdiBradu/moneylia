import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
import styled from 'styled-components';
//Assets
import {ChevronLeftIcon} from '../../assets/icons/ChevronLeftIcon';

interface PaymentDetailsPops {
  onPress: () => void;
}

const StyledView = styled(View)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.pagopa};
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 16px;
  line-height: 19.2px;
  color: ${theme.colors.white};
`;

const StyledChevron = styled(TouchableOpacity)<PaymentDetailsPops>`
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

export const PaymentDetails: React.FC<PaymentDetailsPops> = ({onPress}) => {
  return (
    <StyledView>
      <StyledChevron onPress={onPress}>
        <ChevronLeftIcon />
      </StyledChevron>
      <StyledText>Payment details</StyledText>
    </StyledView>
  );
};

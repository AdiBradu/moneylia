import React from 'react';
import {View, Text} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
import styled from 'styled-components';
//Assets
import {PagoPAIconLG} from '../../assets/icons/PagoPAIconLG';

const StyledView = styled(View)`
  height: 82px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: ${theme.colors.pagopa};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const StyledText = styled(Text)`
  font-family: 'WorkSans-SemiBold';
  font-size: 24px;
  line-height: 28.8px;
  color: ${theme.colors.white};
`;

export const PagopaHeader: React.FC = () => {
  return (
    <StyledView>
      <StyledText>Tax payments</StyledText>
      <PagoPAIconLG color={theme.colors.white} />
    </StyledView>
  );
};

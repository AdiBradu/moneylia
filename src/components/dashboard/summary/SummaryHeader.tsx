import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
//Assets
import {UserIcon} from '../../../assets/icons/UserIcon';

const StyledView = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-family: 'WorkSans-Medium';
  font-size: 16px;
  line-height: 19.2px;
  color: ${theme.colors.violet};
  margin-left: 10px;
`;

export const SummaryHeader: React.FC = () => {
  return (
    <StyledView>
      <UserIcon />
      <StyledText>User summary</StyledText>
    </StyledView>
  );
};

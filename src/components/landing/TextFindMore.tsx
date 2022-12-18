import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';

const StyledText = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 14px;
  line-height: 21px;
  text-decoration-line: underline;
  color: ${theme.colors.violet};
  margin-top: 24px;
`;

export const TextFindMore: React.FC = () => {
  return (
    <View>
      <StyledText>Don't have SPID or CIE? Find out more</StyledText>
    </View>
  );
};

import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../../styles/theme';

const StyledText = styled(Text)`
  font-family: 'Rubik-Medium';
  font-size: 22px;
  line-height: 26.4px;
  color: ${theme.colors.violet};
`;

export const ContributionsHeader: React.FC = () => {
  return (
    <View>
      <StyledText>Contributions of 2022</StyledText>
    </View>
  );
};

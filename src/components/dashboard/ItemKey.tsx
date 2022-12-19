import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Types
import {TextProps} from '../../types/types';

const StyledText = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 12px;
  line-height: 14.4px;
  letter-spacing: -0.5px;
  color: ${theme.colors.copy};
  text-transform: capitalize;
`;

export const ItemKey: React.FC<TextProps> = ({text}) => {
  return (
    <View>
      <StyledText>{text}</StyledText>
    </View>
  );
};

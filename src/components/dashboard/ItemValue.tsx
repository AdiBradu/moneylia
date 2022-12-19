import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Types
import {TextProps} from '../../types/types';

const StyledText = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 16px;
  line-height: 19.2px;
  color: ${theme.colors.darkViolet};
  margin-top: 3px;
`;

const StyledError = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 16px;
  line-height: 19.2px;
  color: ${theme.colors.error};
  margin-top: 3px;
`;

export const ItemValue: React.FC<TextProps> = ({text}) => {
  return (
    <View>
      {text ? (
        <StyledText>{text}</StyledText>
      ) : (
        <StyledError>Unavailable</StyledError>
      )}
    </View>
  );
};

import React from 'react';
import {Text} from 'react-native';
//Styling
import styled from 'styled-components';
//Types
import {TabBarLabelProps} from '../../types/types';
import {StyledLabelProps} from '../../types/types';

const StyledText = styled(Text)<StyledLabelProps>`
  font-family: 'Rubik-Regular';
  font-size: 11px;
  line-height: 13.2px;
  color: ${props => props.color};
`;

export const TabBarLabel: React.FC<TabBarLabelProps> = ({route, color}) => {
  return <StyledText color={color}>{route}</StyledText>;
};

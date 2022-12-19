import React from 'react';
import {Text} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';

const Styledtext = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 32px;
  line-height: 38.4px;
  color: ${theme.colors.white};
`;

export const DashboardGreetingTitle = () => {
  return <Styledtext>Hello, John S.</Styledtext>;
};

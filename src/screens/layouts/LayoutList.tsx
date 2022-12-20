import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Types
import {LayoutDefaultProps} from '../../types/types';

const StyledView = styled(View)<LayoutDefaultProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${props => props.background};
`;

export const LayoutList: React.FC<LayoutDefaultProps> = ({
  children,
  background,
}) => {
  return <StyledView background={background}>{children}</StyledView>;
};

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
//Styling
import styled from 'styled-components';
//Types
import {ButtonDefaultProps} from '../../types/types';

const StyledButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  width: 260px;
  height: 50px;
  background: #7476ed;
  border-radius: 4px;
  margin-top: 60px;
`;

const StyledLabel = styled(Text)`
  font-family: 'WorkSans-Medium';
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
`;

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  text,
  onPress,
  ...props
}) => {
  return (
    <StyledButton onPress={onPress} {...props}>
      <StyledLabel>{text}</StyledLabel>
    </StyledButton>
  );
};

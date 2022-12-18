import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';

interface TextGreetingTitleProps {
  title: string;
}

const Title = styled(Text)`
  font-family: 'WorkSans-Medium';
  font-style: normal;
  font-size: 32px;
  line-height: 38.4px;
  text-align: center;
  color: #3a3b7b;
  margin-top: 24px;
`;

export const TextGreetingTitle: React.FC<TextGreetingTitleProps> = ({
  title,
}) => {
  return (
    <View>
      <Title>{title}</Title>
    </View>
  );
};

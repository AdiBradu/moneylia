import React from 'react';
import {View, Text} from 'react-native';
//Styling
import styled from 'styled-components';

interface TextGreetingSubtitleProps {
  subtitle: string;
}

const Subtitle = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #6f6d7b;
  margin-top: 8px;
  max-width: 264px;
`;

export const TextGreetingSubtitle: React.FC<TextGreetingSubtitleProps> = ({
  subtitle,
}) => {
  return (
    <View>
      <Subtitle>{subtitle}</Subtitle>
    </View>
  );
};

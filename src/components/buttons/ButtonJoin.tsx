import React from 'react';
//Styling
import styled from 'styled-components';
//Components
import {ButtonDefault} from './ButtonDefault';
//Navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
//Types
import {LandingStackParamList} from '../../types/types';

const StyledButton = styled(ButtonDefault)`
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

export const ButtonJoin: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LandingStackParamList>>();
  const handlePress = () => {
    console.log('pressed');
    navigation.navigate('Root');
  };

  return <StyledButton onPress={handlePress} text="Join for free" />;
};

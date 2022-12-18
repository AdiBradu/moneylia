import React from 'react';
import {Image} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';
import {Greeting} from '../../components/landing/Greeting';
import {TextFindMore} from '../../components/landing/TextFindMore';
import {ButtonJoin} from '../../components/buttons/ButtonJoin';

const MainImage = styled(Image)`
  width: 100%;
`;

export const LandingScreen: React.FC = () => {
  return (
    <LayoutDefault
      scrollViewBackground={theme.colors.white}
      statusBarBackground={theme.colors.white}>
      <MainImage source={require('../../assets/images/womansavingmoney.png')} />
      <Greeting />
      <ButtonJoin />
      <TextFindMore />
    </LayoutDefault>
  );
};

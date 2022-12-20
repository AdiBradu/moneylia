import React from 'react';
import {SafeAreaView, Image} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {LayoutLanding} from '../layouts/LayoutLanding';
import {Greeting} from '../../components/landing/Greeting';
import {TextFindMore} from '../../components/landing/TextFindMore';
import {ButtonJoin} from '../../components/buttons/ButtonJoin';
import {FocusAwareStatusBar} from '../../navigation/FocusAwareStatusBar';
//Types
import type {LandingScreenProps} from '../../types/types';

const MainImage = styled(Image)`
  width: 100%;
`;

export const LandingScreen: React.FC<LandingScreenProps> = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      <LayoutLanding background={theme.colors.white}>
        <MainImage
          source={require('../../assets/images/womansavingmoney.png')}
        />
        <Greeting />
        <ButtonJoin />
        <TextFindMore />
      </LayoutLanding>
    </SafeAreaView>
  );
};

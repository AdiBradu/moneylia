import React from 'react';
import {SafeAreaView} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
//Components
import {NavigationHeader} from '../../components/navigation/NavigationHeader';
import {PagopaHeader} from '../../components/pagopa/PagopaHeader';
import {PagopaContent} from '../../components/pagopa/PagopaContent';
import {LayoutList} from '../layouts/LayoutList';
import {FocusAwareStatusBar} from '../../navigation/FocusAwareStatusBar';
//Types
import type {PagopaScreenProps} from '../../types/types';

export const PagopaScreen: React.FC<PagopaScreenProps> = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.pagopa}
      />
      <LayoutList background={theme.colors.pale}>
        <NavigationHeader background={theme.colors.pagopa} />
        <PagopaHeader />
        <PagopaContent />
      </LayoutList>
    </SafeAreaView>
  );
};

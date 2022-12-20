import React from 'react';
import {SafeAreaView, Text} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';
import {FocusAwareStatusBar} from '../../navigation/FocusAwareStatusBar';
//Types
import type {ExtractScreenProps} from '../../types/types';

export const ExtractScreen: React.FC<ExtractScreenProps> = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <LayoutDefault background={theme.colors.pale}>
        <Text>Extract</Text>
      </LayoutDefault>
    </SafeAreaView>
  );
};

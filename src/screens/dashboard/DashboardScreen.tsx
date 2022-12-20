import React from 'react';
import {SafeAreaView} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';
import {NavigationHeader} from '../../components/navigation/NavigationHeader';
import {DashboardContent} from '../../components/dashboard/DashboardContent';
import {FocusAwareStatusBar} from '../../navigation/FocusAwareStatusBar';
import type {DashboardScreenProps} from '../../types/types';

export const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <LayoutDefault background={theme.colors.pale}>
        <NavigationHeader background={theme.colors.primary} />
        <DashboardContent />
      </LayoutDefault>
    </SafeAreaView>
  );
};

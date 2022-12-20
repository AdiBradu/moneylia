import React from 'react';
import {SafeAreaView} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
//Components
import {PaymentContent} from '../../components/payment/PaymentContent';
import {LayoutList} from '../layouts/LayoutList';
import {FocusAwareStatusBar} from '../../navigation/FocusAwareStatusBar';
//Types
import type {PaymentScreenProps} from '../../types/types';

export const PaymentScreen: React.FC<PaymentScreenProps> = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.pagopa}
      />
      <LayoutList background={theme.colors.white}>
        <PaymentContent />
      </LayoutList>
    </SafeAreaView>
  );
};

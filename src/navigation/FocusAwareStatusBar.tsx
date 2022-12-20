import * as React from 'react';
import {StatusBar} from 'react-native';
//Navigation
import {useIsFocused} from '@react-navigation/native';
//Types
import {StatusBarProps} from 'react-native';

export const FocusAwareStatusBar: React.FC<StatusBarProps> = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

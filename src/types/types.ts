import React from 'react';

interface LayoutDefaultProps {
  children: React.ReactNode | React.ReactNode[];
  statusBarBackground?: string;
  scrollViewBackground?: string;
}

interface ScrollViewProps {
  scrollViewBackground?: string;
}

type LandingStackParamList = {
  Login: any;
  Root: any;
};

type RootStackParamList = {
  Dashboard: any;
  Extract: any;
  Pagopa: any;
  Profile: any;
};

interface ButtonDefaultProps {
  text: string;
  onPress: () => void;
}

export type {
  ButtonDefaultProps,
  LayoutDefaultProps,
  ScrollViewProps,
  LandingStackParamList,
  RootStackParamList,
};

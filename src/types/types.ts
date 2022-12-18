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
  PagoPA: any;
  Profile: any;
};

interface ButtonDefaultProps {
  text: string;
  onPress: () => void;
}

interface StyledBarProps {
  isFocused: boolean;
}

interface StyledLabelProps {
  isFocused: boolean;
}

interface TabBarIconProps {
  color?: string;
  route?: string;
}

interface IconProps {
  color?: string;
}

export type {
  IconProps,
  TabBarIconProps,
  StyledLabelProps,
  StyledBarProps,
  ButtonDefaultProps,
  LayoutDefaultProps,
  ScrollViewProps,
  LandingStackParamList,
  RootStackParamList,
};

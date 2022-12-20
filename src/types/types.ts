import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface LayoutDefaultProps {
  children: React.ReactNode | React.ReactNode[];
  background?: string;
}

interface LayoutLandingProps {
  children: React.ReactNode | React.ReactNode[];
  background?: string;
}

interface ScrollViewProps {
  background?: string;
}

type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
  Payment: {id: number; price: number};
};

type TabStackParamList = {
  Dashboard: undefined;
  Extract: undefined;
  PagoPA: undefined;
  Profile: undefined;
};

type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
type DashboardScreenProps = NativeStackScreenProps<
  TabStackParamList,
  'Dashboard'
>;
type ExtractScreenProps = NativeStackScreenProps<TabStackParamList, 'Extract'>;
type PagopaScreenProps = NativeStackScreenProps<TabStackParamList, 'PagoPA'>;
type ProfileScreenProps = NativeStackScreenProps<TabStackParamList, 'Profile'>;
type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>;

interface ButtonDefaultProps {
  text: string;
  onPress: () => void;
}

interface StyledBarProps {
  isFocused: boolean;
}

interface StyledLabelProps {
  color: string | undefined;
}

interface TabBarIconProps {
  color?: string;
  route?: string;
}

interface TabBarLabelProps {
  color?: string;
  route?: string;
}

interface IconProps {
  color?: string;
}

interface NavigationHeaderProps {
  background?: string;
}

interface TextProps {
  text: string | null;
}

interface PaymentProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

export type {
  LandingScreenProps,
  DashboardScreenProps,
  ExtractScreenProps,
  PagopaScreenProps,
  ProfileScreenProps,
  PaymentScreenProps,
  LayoutLandingProps,
  PaymentProps,
  TextProps,
  NavigationHeaderProps,
  IconProps,
  TabBarIconProps,
  TabBarLabelProps,
  StyledLabelProps,
  StyledBarProps,
  ButtonDefaultProps,
  LayoutDefaultProps,
  ScrollViewProps,
  RootStackParamList,
  TabStackParamList,
};

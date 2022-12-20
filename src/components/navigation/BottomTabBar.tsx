import React from 'react';
import {View, TouchableOpacity} from 'react-native';
//Components
import {TabBarIcon} from '../navigation/TabBarIcon';
import {TabBarLabel} from './TabBarLabel';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Types
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import type {StyledBarProps} from '../../types/types';
//Redux
import {useAppDispatch} from '../../redux/hooks/hooks';
import {fetchPayments} from '../../redux/features/payments/paymentsSlice';

const StyledContainer = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 69px;
  padding-bottom: 16px;
  padding-top: 0px;
  justify-content: space-evenly;
  background-color: #fff;
  border-top: 1px solid #83828e;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  width: 58px;
  height: 53px;
`;

const StyledBar = styled(View)<StyledBarProps>`
  display: flex;
  height: 2px;
  width: 100%;
  background-color: ${props =>
    props.isFocused ? theme.colors.primary : '#fff'};
`;

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const dispatch = useAppDispatch();

  return (
    <StyledContainer>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name === 'PagoPA') {
            dispatch(fetchPayments());
          }

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <StyledTouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <StyledBar isFocused={isFocused} />
            <TabBarIcon
              color={isFocused ? theme.colors.primary : theme.colors.lightGrey}
              route={route.name}
            />
            <TabBarLabel
              color={isFocused ? theme.colors.primary : theme.colors.lightGrey}
              route={route.name}
            />
          </StyledTouchableOpacity>
        );
      })}
    </StyledContainer>
  );
};

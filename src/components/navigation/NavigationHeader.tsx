import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Media
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {MoneyliaLogomark} from '../../assets/icons/MoneyliaLogomark';
//Types
import {NavigationHeaderProps} from '../../types/types';

const StyledView = styled(View)<NavigationHeaderProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.background};
  height: 60px;
  padding: 0px 16px;
`;

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  background,
}) => {
  return (
    <StyledView background={background}>
      <MoneyliaLogomark color={theme.colors.white} />
      <ChatIcon color={theme.colors.white} />
    </StyledView>
  );
};

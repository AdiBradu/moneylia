import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
//Components
import {ItemKey} from '../ItemKey';
import {ItemValue} from '../ItemValue';

interface ViewProps {
  marginItem?: string;
}

interface ContributionsItemProps {
  marginItem?: string;
  itemKey: string;
  itemValue: string | null;
  icon: JSX.Element;
}

const StyledItemContainer = styled(View)`
  width: 50%;
`;

const StyledView = styled(View)<ViewProps>`
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  margin: ${props => props.marginItem};
  padding: 24px 12px;
`;

const StyledIcon = styled(View)`
  margin-bottom: 8px;
`;

export const ContributionsItem: React.FC<ContributionsItemProps> = ({
  marginItem,
  itemKey,
  itemValue,
  icon,
}) => {
  return (
    <StyledItemContainer>
      <StyledView marginItem={marginItem}>
        <StyledIcon>{icon}</StyledIcon>
        <ItemKey text={itemKey} />
        <ItemValue text={itemValue} />
      </StyledView>
    </StyledItemContainer>
  );
};

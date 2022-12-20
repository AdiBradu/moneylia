import React from 'react';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {ButtonDefault} from './ButtonDefault';

const StyledButton = styled(ButtonDefault)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  width: 100%;
  height: 50px;
  background: ${theme.colors.pagopa};
  border-radius: 4px;
  margin-top: 16px;
`;

export const ButtonPayNow: React.FC = () => {
  const handlePress = () => {
    console.log('Pay now');
  };

  return <StyledButton onPress={handlePress} text="Pay now" />;
};

import React from 'react';
//Styling
import styled from 'styled-components';
import {theme} from '../../styles/theme';
//Components
import {LayoutDefault} from '../layouts/LayoutDefault';

export const ExtractScreen: React.FC = () => {
  return (
    <LayoutDefault
      scrollViewBackground={theme.colors.pale}
      statusBarBackground={theme.colors.primary}></LayoutDefault>
  );
};

import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {SummaryItem} from './SummaryItem';
//Data
import {summary} from '../../../data/summary';

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const SummaryList: React.FC = () => {
  return (
    <StyledView>
      {summary.map(item => (
        <SummaryItem
          key={item.id}
          width={item.id === '4' || item.id === '5' ? '25%' : '50%'}
          itemKey={item.key}
          itemValue={item.value}
        />
      ))}
    </StyledView>
  );
};

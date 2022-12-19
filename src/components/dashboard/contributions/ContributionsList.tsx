import React from 'react';
import {View} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {ContributionsItem} from './ContributionsItem';
//Data
import {contributions} from '../../../data/contributions';

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const ContributionsList = () => {
  return (
    <StyledView>
      {contributions.map(item => (
        <ContributionsItem
          key={item.id}
          marginItem={
            item.id === '1'
              ? '0px 8px 8px 0px'
              : item.id === '2'
              ? '0px 0px 8px 8px'
              : item.id === '3'
              ? '8px 8px 0px 0px'
              : '8px 0px 0px 8px'
          }
          itemKey={item.key}
          itemValue={item.value}
          icon={item.icon}
        />
      ))}
    </StyledView>
  );
};

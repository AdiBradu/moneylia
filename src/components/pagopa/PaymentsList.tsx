import React from 'react';
import {View, FlatList} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {PaymentsItem} from './PaymentsItem';
//Redux
import {useAppSelector} from '../../redux/hooks/hooks';

const StyledView = styled(View)`
  flex: 1;
`;

export const PaymentsList: React.FC = () => {
  const payments = useAppSelector(state => state.payments.payments);

  return (
    <StyledView>
      <FlatList
        data={payments}
        renderItem={({item}) => (
          <PaymentsItem
            description={item.description}
            price={item.price}
            id={item.id}
          />
        )}
      />
    </StyledView>
  );
};

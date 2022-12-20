import React from 'react';
import {View, FlatList} from 'react-native';
//Styling
import styled from 'styled-components';
//Components
import {PaymentItem} from './PaymentItem';
//Redux
import {useAppSelector} from '../../redux/hooks/hooks';

const StyledView = styled(View)`
  flex: 1;
  padding: 0px 16px;
`;

export const PaymentList: React.FC = () => {
  const payment = useAppSelector(state => state.payment.payment);

  const keys = payment ? Object.keys(payment) : null;
  const values = payment ? Object.values(payment) : null;

  return (
    <StyledView>
      <FlatList
        data={keys}
        renderItem={({item, index}) => (
          <PaymentItem itemKey={item} itemValue={values ? values[index] : ''} />
        )}
      />
    </StyledView>
  );
};

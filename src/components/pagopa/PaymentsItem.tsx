import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//Styling
import {theme} from '../../styles/theme';
import styled from 'styled-components';
//Assets
import {PagoPAIconLG} from '../../assets/icons/PagoPAIconLG';
import {ChevronRight} from '../../assets/icons/ChevronRight';
//Navigation
import {useNavigation} from '@react-navigation/native';
//Types
import {RootStackParamList} from '../../types/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
//Redux
import {useAppDispatch} from '../../redux/hooks/hooks';
import {fetchPayment} from '../../redux/features/payment/paymentSlice';

interface PaymentsItemProps {
  description: string;
  price: number;
  id: number;
}

const StyledItemView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 8px;
  gap: 24px;
  height: 80px;
  width: 100%;
  background: ${theme.colors.white};
  border-radius: 8px;
  margin-top: 12px;
`;

const StyledPagopaIcon = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  width: 56px;
  height: 56px;
  background: rgba(0, 102, 204, 0.1);
  border-radius: 4px;
`;

const StyleViewData = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 12px;
`;

const StyledDataTitle = styled(Text)`
  font-family: 'Rubik-Regular';
  font-size: 12px;
  line-height: 14.4px;
  display: flex;
  align-items: center;
  color: #312e43;
  text-transform: uppercase;
  text-overflow: ellipsis;
`;

const StyledBottomInfo = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledDate = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.5px;
  color: ${theme.colors.lightGrey};
`;

const StyledAmount = styled(Text)`
  font-family: 'WorkSans-Regular';
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.5px;
  color: ${theme.colors.error};
  text-align: right;
`;

const StyledChevronView = styled(View)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentsItem: React.FC<PaymentsItemProps> = ({
  id,
  description,
  price,
}) => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handlePress = () => {
    navigation.navigate('Payment', {id: id, price: price});
    dispatch(fetchPayment(id));
  };
  return (
    <StyledItemView onPress={handlePress}>
      <StyledPagopaIcon>
        <PagoPAIconLG color={theme.colors.pagopa} />
      </StyledPagopaIcon>
      <StyleViewData>
        <StyledDataTitle numberOfLines={2}>{description}</StyledDataTitle>
        <StyledBottomInfo>
          <StyledDate>02/28/2022</StyledDate>
          <StyledAmount>€ {price}.99</StyledAmount>
        </StyledBottomInfo>
      </StyleViewData>
      <StyledChevronView>
        <ChevronRight />
      </StyledChevronView>
    </StyledItemView>
  );
};

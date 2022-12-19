import React from 'react';
import {PiggyBankIcon} from '../assets/icons/PiggyBankIcon';
import {BankIcon} from '../assets/icons/BankIcon';
import {CreditCardIcon} from '../assets/icons/CreditCardIcon';
import {ChartIcon} from '../assets/icons/ChartIcon';

export const contributions = [
  {
    id: '1',
    key: 'Paid',
    value: null,
    icon: <ChartIcon />,
  },
  {
    id: '2',
    key: 'Due',
    value: null,
    icon: <CreditCardIcon />,
  },
  {
    id: '3',
    key: 'Advanced payment',
    value: '€ 1230.00',
    icon: <PiggyBankIcon />,
  },
  {
    id: '4',
    key: 'Modularity',
    value: '€ 340.59',
    icon: <BankIcon />,
  },
];

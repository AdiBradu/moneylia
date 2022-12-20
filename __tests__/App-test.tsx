/**
 * @format
 */

import 'react-native';
import React from 'react';

import {ButtonPayNow} from '../src/components/buttons/ButtonPayNow';
import {ButtonDefault} from '../src/components/buttons/ButtonDefault';
import {DashboardGreeting} from '../src/components/dashboard/DashboardGreeting';
import {DashboardGreetingTitle} from '../src/components/dashboard/DashboardGreetingTitle';
import {DashboardGreetingSubtitle} from '../src/components/dashboard/DashboardGreetingSubtitle';
import {PagoPAIcon} from '../src/assets/icons/PagoPAIcon';
import {PagopaSubtitle} from '../src/components/pagopa/PagopaSubtitle';
import {MoneyliaLogomark} from '../src/assets/icons/MoneyliaLogomark';
import {PaymentDetails} from '../src/components/payment/PaymentDetails';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('ButtonPayNow renders correctly', () => {
  const tree = renderer.create(<ButtonPayNow />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ButtonJoin renders correctly', () => {
  const tree = renderer
    .create(
      <ButtonDefault
        text={'Press Me'}
        onPress={() => console.log('Button pressed')}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('DashboardGreetingTitle renders correctly', () => {
  const tree = renderer.create(<DashboardGreetingTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DashboardGreetingSubtitle renders correctly', () => {
  const tree = renderer.create(<DashboardGreetingSubtitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DashboardGreeting renders correctly', () => {
  const tree = renderer.create(<DashboardGreeting />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PagoPAIcon renders correctly', () => {
  const tree = renderer.create(<PagoPAIcon color={'#fff'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PagopaSubtitle renders correctly', () => {
  const tree = renderer.create(<PagopaSubtitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('MoneyliaLogomark renders correctly', () => {
  const tree = renderer.create(<MoneyliaLogomark color={'#7476ED'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PaymentDetails renders correctly', () => {
  const tree = renderer
    .create(<PaymentDetails onPress={() => console.log('Go Back!')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

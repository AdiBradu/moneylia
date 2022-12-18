import React from 'react';
import {View} from 'react-native';
//Components
import {TextGreetingTitle} from './TextGreetingTitle';
import {TextGreetingSubtitle} from './TextGreetingSubtitle';

export const Greeting: React.FC = () => {
  return (
    <View>
      <TextGreetingTitle title="Save your money" />
      <TextGreetingSubtitle subtitle="Lorem ipsum dolor sit amet, adipiscing consectetur elit, sed do" />
    </View>
  );
};

import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailsTheme';

export default function DetailsScreen() {
  const {container, title} = styles;

  return (
    <View style={container}>
      <Text style={title}>Details</Text>
    </View>
  );
}

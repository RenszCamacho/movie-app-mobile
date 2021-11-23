import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './HomeTheme';

const HomeScreen = () => {
  const {container, title} = styles;

  return (
    <View style={container}>
      <Text style={title}>Home</Text>
    </View>
  );
};

export default HomeScreen;

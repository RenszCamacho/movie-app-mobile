import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './DetailsTheme';

export default function DetailsScreen() {
  const {container, title, button, buttonText} = styles;

  const {navigate} = useNavigation();

  return (
    <View style={container}>
      <Text style={title}>Details</Text>

      <TouchableOpacity
        onPress={() => navigate('HomeScreen' as never, {} as never)}
        style={button}>
        <Text style={buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

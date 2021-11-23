import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './HomeTheme';

const HomeScreen = () => {
  const {container, title, button, buttonText} = styles;
  const navigation = useNavigation();

  return (
    <View style={container}>
      <Text style={title}>Home</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailsScreen' as never, {} as never)
        }
        style={button}>
        <Text style={buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

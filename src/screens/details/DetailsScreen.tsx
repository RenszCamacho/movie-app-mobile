import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {styles} from './DetailsTheme';
import {RootStackParamList} from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'DetailsScreen'> {}

export default function DetailsScreen({route}: Props) {
  const {container, text, button, buttonText} = styles;
  const {navigate} = useNavigation();
  const {title, id} = route.params;

  console.log(title, id);

  return (
    <View style={container}>
      <Text style={text}>Details</Text>

      <TouchableOpacity
        onPress={() => navigate('HomeScreen' as never, {} as never)}
        style={button}>
        <Text style={buttonText}>Go Home</Text>
      </TouchableOpacity>

      <View>
        <Text>{title}</Text>
        <Text>{id}</Text>
      </View>
    </View>
  );
}

import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {URL_BASE_IMAGE} from '@env';

import {styles} from './DetailsTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'DetailsScreen'> {}

const {height} = Dimensions.get('screen');

export default function DetailsScreen({route}: Props) {
  const {container, button, buttonText, image, imageWrapper} = styles;
  const {goBack} = useNavigation();
  const {poster_path} = route.params;
  const uri = `${URL_BASE_IMAGE}${poster_path}`;

  const customImageWraper = {
    ...imageWrapper,
    height: height * 0.7,
  };

  return (
    <View style={container}>
      <View style={customImageWraper}>
        <Image source={{uri}} style={image} />
      </View>

      <TouchableOpacity onPress={() => goBack()} style={button}>
        <Text style={buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

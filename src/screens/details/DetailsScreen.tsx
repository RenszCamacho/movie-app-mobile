import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {URL_BASE_IMAGE} from '@env';

import {RootStackParamList} from '../../navigation/Navigation';
import {styles} from './DetailsTheme';

interface Props extends StackScreenProps<RootStackParamList, 'DetailsScreen'> {}

export default function DetailsScreen({route}: Props) {
  const {
    container,
    image,
    imageWrapper,
    detailsWrapper,
    detailsTitle,
    originalTitle,
  } = styles;
  const {poster_path, original_title, title} = route.params;
  const uri = `${URL_BASE_IMAGE}${poster_path}`;

  return (
    <ScrollView>
      <View style={container}>
        <View style={imageWrapper}>
          <Image source={{uri}} style={image} />
        </View>

        <View style={detailsWrapper}>
          <Text style={originalTitle}>{original_title}</Text>
          <Text style={detailsTitle}>{title}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

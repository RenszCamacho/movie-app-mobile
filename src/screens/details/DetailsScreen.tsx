import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {URL_BASE_IMAGE} from '@env';

import {styles} from './DetailsTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'DetailsScreen'> {}

export default function DetailsScreen({route}: Props) {
  const {container, image, imageWrapper} = styles;
  const {poster_path} = route.params;
  const uri = `${URL_BASE_IMAGE}${poster_path}`;

  return (
    <ScrollView>
      <View style={container}>
        <View style={imageWrapper}>
          <Image source={{uri}} style={image} />
        </View>
      </View>
    </ScrollView>
  );
}

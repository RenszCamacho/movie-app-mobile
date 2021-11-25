import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {URL_BASE_IMAGE} from '@env';

import {Movies} from '../../types/movie.interface';
import {styles} from './PosterTheme';

interface Props {
  movies: Movies;
  width?: number;
  height?: number;
  marginHorizontal?: number;
}

export default function Poster({
  movies,
  width = 250,
  height = 420,
  marginHorizontal = 0,
}: Props) {
  const {boxShadow, image} = styles;
  const imageWraper = {height, width, marginHorizontal};
  const uri = `${URL_BASE_IMAGE}/${movies.poster_path}`;
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('DetailsScreen' as never, movies as never)}
      activeOpacity={0.9}
      style={imageWraper}>
      <View style={boxShadow}>
        <Image source={{uri}} style={image} />
      </View>
    </TouchableOpacity>
  );
}

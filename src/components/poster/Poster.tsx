import React from 'react';
import {Image, View} from 'react-native';
import {Movies} from '../../types/movie.interface';
import {URL_BASE_IMAGE} from '@env';
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

  return (
    <View style={imageWraper}>
      <View style={boxShadow}>
        <Image source={{uri}} style={image} />
      </View>
    </View>
  );
}

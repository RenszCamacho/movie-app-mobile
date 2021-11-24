import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movies} from '../types/movie.interface';
import {URL_BASE_IMAGE} from '@env';

interface Props {
  movies: Movies;
}

export default function Poster({movies}: Props) {
  const {imageWraper, boxShadow, image} = styles;
  const uri = `${URL_BASE_IMAGE}/${movies.poster_path}`;

  return (
    <View style={imageWraper}>
      <View style={boxShadow}>
        <Image source={{uri}} style={image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWraper: {
    width: '100%',
    height: 430,
  },
  boxShadow: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
});

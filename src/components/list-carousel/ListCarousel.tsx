import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {Movies} from '../../types/movie.interface';
import Poster from '../poster/Poster';
import {styles} from './ListCarouselTheme';

interface Props {
  movies: Movies[];
  title: string;
}

export default function ListCarousel({movies, title}: Props) {
  const {flatListWrapper, titleList} = styles;

  return (
    <View style={flatListWrapper}>
      <Text style={titleList}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <Poster width={140} height={200} marginHorizontal={8} movies={item} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
    </View>
  );
}

import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movies} from '../../types/movie.interface';
import Poster from '../poster/Poster';
import {styles} from './MainCarouselTheme';

interface Props {
  movies: Movies[];
}

export default function MainCarousel({movies}: Props) {
  const {carouselWrapper} = styles;
  const {width: windowWidth} = Dimensions.get('screen');

  return (
    <View style={carouselWrapper}>
      <Carousel
        data={movies}
        renderItem={({item}: any) => <Poster movies={item} />}
        sliderWidth={windowWidth}
        itemWidth={250}
      />
    </View>
  );
}

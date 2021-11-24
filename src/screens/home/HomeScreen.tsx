import React from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import Poster from '../../components/Poster';
import useMovies from '../../hooks/useMovies';
import {styles} from './HomeTheme';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {isLoadingWrapper, carouselWrapper} = styles;
  const {movies, isLoading} = useMovies([]);
  const {top} = useSafeAreaInsets();

  const styleSafeAreaTop = {
    marginTop: top + 20,
  };

  if (isLoading) {
    return (
      <View style={isLoadingWrapper}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styleSafeAreaTop}>
      <View style={carouselWrapper}>
        <Carousel
          data={movies}
          renderItem={({item}: any) => <Poster movies={item} />}
          sliderWidth={windowWidth}
          itemWidth={250}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

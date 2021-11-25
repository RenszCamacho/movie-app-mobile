import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ListCarousel from '../../components/list-carousel/ListCarousel';
import MainCarousel from '../../components/main-carousel/MainCarousel';
import useMovies from '../../hooks/useMovies';
import {styles} from './HomeTheme';

const HomeScreen = () => {
  const {isLoadingWrapper} = styles;
  const {nowPlaying, popularMovies, topRated, upComing, isLoading} =
    useMovies();
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
    <ScrollView>
      <View style={styleSafeAreaTop}>
        <MainCarousel movies={nowPlaying} />
        <ListCarousel movies={topRated} title="Top Rated" />
        <ListCarousel movies={popularMovies} title="Popular Movies" />
        <ListCarousel movies={upComing} title="Up Coming" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

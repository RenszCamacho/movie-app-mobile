import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import useMovies from '../../hooks/useMovies';
import {styles} from './HomeTheme';

const HomeScreen = () => {
  const {container, title, button, buttonText, isLoadingWrapper} = styles;
  const {navigate, movies, isLoading} = useMovies([]);

  console.log(movies[1]?.title);

  if (isLoading) {
    return (
      <View style={isLoadingWrapper}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={container}>
      <Text style={title}>Home</Text>

      <TouchableOpacity
        onPress={() => navigate('DetailsScreen' as never, {} as never)}
        style={button}>
        <Text style={buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

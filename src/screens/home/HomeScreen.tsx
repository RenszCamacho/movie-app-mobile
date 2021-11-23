import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useMovies from '../../hooks/useMovies';

const HomeScreen = () => {
  const {container, title, button, buttonText, navigate, movies} = useMovies(
    [],
  );

  console.log(movies);
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

import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './HomeTheme';
import movieDB from '../../api/movieDB';

import {MoviesResponse} from '../../types/movie.interface';

const HomeScreen = () => {
  const {container, title, button, buttonText} = styles;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await movieDB.get<MoviesResponse>('/now_playing');
      console.log(data.results[0].title);
    };
    fetchData();
  }, []);

  return (
    <View style={container}>
      <Text style={title}>Home</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailsScreen' as never, {} as never)
        }
        style={button}>
        <Text style={buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

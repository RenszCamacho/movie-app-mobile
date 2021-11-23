import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './HomeTheme';
import {CLIENT_ID} from '@env';
// import movieDB from '../../api/movieDB';

const HomeScreen = () => {
  const {container, title, button, buttonText} = styles;
  const navigation = useNavigation();

  useEffect(() => {
    console.log(CLIENT_ID);
    // const fetchData = async () => {
    //   const response = await movieDB.get('/now_playing');
    //   console.log(response.data);
    // };
    // fetchData();
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

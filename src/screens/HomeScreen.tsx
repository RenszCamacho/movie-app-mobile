import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  const {container, title} = styles;

  return (
    <View style={container}>
      <Text style={title}>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailsScreen() {
  const {container, title} = styles;

  return (
    <View style={container}>
      <Text style={title}>Details</Text>
    </View>
  );
}

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

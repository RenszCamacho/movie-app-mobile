import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  const {container, title} = styles;

  return (
    <View style={container}>
      <Text style={title}>Hola</Text>
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
    fontSize: 50,
    fontWeight: 'bold',
  },
});

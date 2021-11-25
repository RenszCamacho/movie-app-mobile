import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  boxShadow: {
    paddingBottom: 5,
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 3,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
});

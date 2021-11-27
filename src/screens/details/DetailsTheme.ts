import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 2,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageWrapper: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  detailsWrapper: {
    margin: 20,
  },
  originalTitle: {
    opacity: 0.7,
    fontSize: 14,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {FullDetails} from '../../types/fullDetails.interface';
import {globalTheme} from '../../../globalThemes';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../../types/creditDetails.interface';
import CastDetails from '../castDetails/CastDetails';

interface Props {
  movieDetails: FullDetails;
  cast: Cast[];
}

export default function MovieDetail({movieDetails, cast}: Props) {
  const {text} = globalTheme;
  const {
    container,
    rateContainer,
    textDetails,
    overviewContainer,
    overviewTitle,
  } = styles;

  return (
    <>
      <View style={container}>
        <View style={rateContainer}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text style={[text, textDetails]}> {movieDetails.vote_average}</Text>
          <Text style={[text, textDetails]}>
            {' '}
            - {movieDetails.genres.map(genre => genre.name + ',')}
          </Text>
        </View>

        <View style={overviewContainer}>
          <Text style={[text, overviewTitle]}>Sinopsis</Text>
          <Text style={[text, textDetails]}>{movieDetails.overview}</Text>
        </View>

        <View style={overviewContainer}>
          <Text style={[text, overviewTitle]}>Budget</Text>
          <Text style={[text, textDetails]}>
            {currencyFormatter.format(movieDetails.budget, {code: 'EUR'})}
          </Text>
        </View>
      </View>
      <View>
        <Text style={[text, overviewTitle, container]}>Actors</Text>
        <FlatList
          data={cast}
          renderItem={({item}) => <CastDetails actors={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDetails: {
    fontSize: 16,
  },
  overviewContainer: {
    marginTop: 20,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

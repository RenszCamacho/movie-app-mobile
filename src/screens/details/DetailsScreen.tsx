import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {URL_BASE_IMAGE} from '@env';

import {RootStackParamList} from '../../navigation/Navigation';
import useMovieDetails from '../../hooks/useMovieDetails';

import ImageDetails from '../../components/imageDetails/ImageDetails';
import TitleDetails from '../../components/titleDetails/TitleDetails';
import MovieDetail from '../../components/movieDetail/MovieDetail';

import {styles} from './DetailsTheme';

interface Props extends StackScreenProps<RootStackParamList, 'DetailsScreen'> {}

export default function DetailsScreen({route}: Props) {
  const {loading, detailsWrapper} = styles;
  const {poster_path, original_title, title, id} = route.params;
  const uri = `${URL_BASE_IMAGE}${poster_path}`;
  const {isLoading, movieDetails, cast} = useMovieDetails(id);

  if (isLoading) {
    return (
      <View style={detailsWrapper}>
        <ActivityIndicator style={loading} size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageDetails uriImage={uri} />
      <TitleDetails title={title} originalTitle={original_title} />
      <MovieDetail movieDetails={movieDetails!} cast={cast!} />
    </ScrollView>
  );
}

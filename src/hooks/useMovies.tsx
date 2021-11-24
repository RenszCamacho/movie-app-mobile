import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Movies, MoviesResponse} from '../types/movie.interface';
import movieDB from '../api/movieDB';

interface MoviesState {
  nowPlaying: Movies[];
  popularMovies: Movies[];
  topRated: Movies[];
  upComing: Movies[];
}

export default function useMovies(initialState: MoviesState) {
  const {navigate} = useNavigation();
  const [movies, setMovies] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const nowPlayingPromise = movieDB.get<MoviesResponse>('/now_playing');
    const popularMoviesPromise = movieDB.get<MoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MoviesResponse>('/top_rated');
    const upComingPromise = movieDB.get<MoviesResponse>('/upcoming');

    const responses = await Promise.all([
      nowPlayingPromise,
      popularMoviesPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMovies({
      nowPlaying: responses[0].data.results,
      popularMovies: responses[1].data.results,
      topRated: responses[2].data.results,
      upComing: responses[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...movies,
    navigate,
    isLoading,
  };
}

import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Movies, MoviesResponse} from '../types/movie.interface';
import movieDB from '../api/movieDB';

export default function useMovies(initialState: Movies[]) {
  const {navigate} = useNavigation();
  const [movies, setMovies] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const {data} = await movieDB.get<MoviesResponse>('/now_playing');

    setMovies(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    navigate,
    movies,
    isLoading,
  };
}

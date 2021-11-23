import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../screens/home/HomeTheme';
import {Movies, MoviesResponse} from '../types/movie.interface';
import movieDB from '../api/movieDB';

export default function useMovies(initialState: Movies[]) {
  const {container, title, button, buttonText} = styles;
  const {navigate} = useNavigation();
  const [movies, setMovies] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await movieDB.get<MoviesResponse>('/now_playing');
      console.log(data.results[0].title);
      setMovies(data.results);
    };

    fetchData();
  }, []);

  return {
    container,
    title,
    button,
    buttonText,
    navigate,
    movies,
  };
}

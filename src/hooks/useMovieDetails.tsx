import {useEffect, useState} from 'react';

import {Cast, CreditsResponse} from '../types/creditDetails.interface';
import {FullDetails} from '../types/fullDetails.interface';
import movieDB from '../api/movieDB';

interface MoviesDetails {
  isLoading: boolean;
  movieDetails: FullDetails | undefined;
  cast: Cast[];
}

export default function useMovieDetails(movieId: number) {
  const [movie, setMovie] = useState<MoviesDetails>({
    isLoading: true,
    movieDetails: undefined,
    cast: [],
  });

  useEffect(() => {
    const fetchMovie = async () => {
      const fullDatailsPromise = await movieDB.get<FullDetails>(`/${movieId}`);
      const castDetailsPromise = await movieDB.get<CreditsResponse>(
        `/${movieId}/credits`,
      );

      const [fullDetailsResponse, castDetailsResponse] = await Promise.all([
        fullDatailsPromise,
        castDetailsPromise,
      ]);

      setMovie({
        isLoading: false,
        movieDetails: fullDetailsResponse.data,
        cast: castDetailsResponse.data.cast,
      });
    };

    fetchMovie();
  }, [movieId]);

  return {
    ...movie,
  };
}

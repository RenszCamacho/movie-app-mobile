import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b2e662f65a5c980bfb6161428e317408',
    language: 'en-US',
  },
});

export default movieDB;

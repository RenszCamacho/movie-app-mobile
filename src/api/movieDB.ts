import axios from 'axios';
import {BASE_API, API_KEY} from '@env';

const movieDB = axios.create({
  baseURL: BASE_API,
  params: {
    api_key: API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;

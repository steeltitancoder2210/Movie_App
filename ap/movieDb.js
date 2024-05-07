import axios from 'axios';
import { apiKey } from '../constants';

// Base URL for The Movie Database (TMDb) API
const apiBaseUrl = 'https://api.themoviedb.org/3';

// Movie-related endpoints
const endpoints = {
  trending: `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`,
  upcoming: `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`,
  topRated: `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`,
};
export const image500=path=>path?`https://image.tmdb.org/t/p/w500${path}`:null;
export const image342=path=>path?`https://image.tmdb.org/t/p/w342${path}`:null;
export const image185=path=>path?`https://image.tmdb.org/t/p/w185${path}`:null;

// General function to call an API endpoint with optional parameters
export const apiCall = async (endpoint, additionalParams = {}) => {
  try {
    const response = await axios.get(endpoint, { params: additionalParams });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    return {}; // Return an empty object on error
  }
};

// Function to fetch trending movies
export const fetchTrendingMovies = () => {
  return apiCall(endpoints.trending);
};

// Function to fetch upcoming movies
export const fetchUpcomingMovies = () => {
  return apiCall(endpoints.upcoming);
};

// Function to fetch top-rated movies
export const fetchTopRatedMovies = () => {
  return apiCall(endpoints.topRated);
};

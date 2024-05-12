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
const movieDetailEndpoint=id=> `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
const moviecreditEndpoint=id=>`${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const similarEndpoint=id=>`${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`
const persondetailEndPOint=id=>`${apiBaseUrl}/person/${id}?api_key=${apiKey}`
const personmoviesEndPOint=id=>`${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`
const SearchmoviesEndPOint=`${apiBaseUrl}/search/movie?api_key=${apiKey}`

export const fallbackPersonimage="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F6491%2Fprofile-default&psig=AOvVaw0GYcuKl6uG2unh6jVt3_DM&ust=1715583110931000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiO-KPDh4YDFQAAAAAdAAAAABAK"
export const image500=path=>path?`https://image.tmdb.org/t/p/w500${path}`:null;
export const image342=path=>path?`https://image.tmdb.org/t/p/w342${path}`:null;
export const image185=path=>path?`https://image.tmdb.org/t/p/w185${path}`:null;
// export const placep="https://www.freeimages.com/cliparts"
// General function to call an API endpoint with optional parameters
export const apiCall = async (endpoint, additionalParams = {}) => {

  const options={
    method:'GET',
    url:endpoint,
    // params:params?params:{}
  }
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

export const fetchMovieDetail = id => {
  return apiCall(movieDetailEndpoint(id));
};
export const fetchcredit = id => {
  return apiCall(moviecreditEndpoint(id));
};
export const fetchsimilar = id => {
  return apiCall(similarEndpoint(id));
};
export const fetchperson= id => {
  return apiCall(persondetailEndPOint(id));
};
export const fetchpersonMOvies = id => {
  return apiCall(personmoviesEndPOint(id));
};
export const searchMovies = params => {
  return apiCall(SearchmoviesEndPOint,params);
};

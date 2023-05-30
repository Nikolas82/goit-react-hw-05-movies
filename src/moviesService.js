import axios from 'axios';
const API_KEY = '406bff9354a0d1960c3f65dfdea628e2';

export const fetchTrendingMovies = async () => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );

    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetailsMovies = async id => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return movies.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreditsMovies = async id => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return movies.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviewsMovies = async id => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async query => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
    );

    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};

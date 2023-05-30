import React from 'react';
import { useEffect, useState } from 'react';

import MoviesList from 'components/moviesList/MoviesList';
import { fetchTrendingMovies } from '../moviesService';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const data = await fetchTrendingMovies();

      setMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && 'Loading ...'}
      {error && <p>An error occurred. Please try again.</p>}
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;

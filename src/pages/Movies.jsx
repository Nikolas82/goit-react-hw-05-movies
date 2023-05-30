import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/moviesList/MoviesList';
import { searchMovies } from 'moviesService';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === '') return;
    if (searchQuery) {
      fetchQuery(searchQuery);
    }
  }, [searchQuery]);

  const handlerSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: e.currentTarget.elements.query.value });
    e.currentTarget.reset();
  };
  const fetchQuery = async searchQuery => {
    try {
      setIsLoading(true);
      const data = await searchMovies(searchQuery);

      setMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="on"
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && 'Loading ...'}
      {error && <p>An error occurred. Please try again.</p>}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;

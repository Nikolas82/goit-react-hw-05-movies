import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

import { searchMovies } from 'components/moviesService';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

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
      console.log(error);
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
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;

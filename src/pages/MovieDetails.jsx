import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultImage from '../components/image/image.png';
import { fetchDetailsMovies } from 'moviesService';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchDetails(movieId);
  }, [movieId]);

  const fetchDetails = async movieId => {
    try {
      setIsLoading(true);
      const data = await fetchDetailsMovies(movieId);

      setMovie(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const releaseYear = () => {
    return new Date(movie.release_date).getFullYear();
  };

  const formatPercentage = value => {
    return Math.round(value / 100) + '%';
  };

  return (
    <>
      <button>
        <Link to={backLocation.current}>Back</Link>
      </button>

      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        {isLoading && 'Loading ...'}
        {error && <p>An error occurred. Please try again.</p>}

        {movie && (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={ defaultImage}
              />
            </div>
            <div>
              <h2>
                {movie.title}
                <span> ({releaseYear()})</span>
              </h2>
              <p>User Score: {formatPercentage(movie.popularity)}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>
                {movie.genres.map(({ id, name }) => (
                  <span key={id}> {name}</span>
                ))}
              </p>
            </div>
          </>
        )}
      </div>
      <div>
        <p>Additional information</p>
        <NavLink to={`/movies/${movieId}/cast`}>
          <p>Cast</p>
        </NavLink>
        <NavLink to={`/movies/${movieId}/reviews`}>
          <p>Reviews</p>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;

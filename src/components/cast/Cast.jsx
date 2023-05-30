import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCreditsMovies } from 'moviesService';
import defaultImage from '../image/image.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  const fetchCast = async movieId => {
    try {
      setIsLoading(true);
      const data = await fetchCreditsMovies(movieId);

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
      <ul>
        {movies &&
          movies.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : defaultImage
                }
                alt=""
              />
              <p>{name}</p>
              <p>Character:{character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;

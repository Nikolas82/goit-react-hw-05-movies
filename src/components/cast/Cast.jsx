import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCreditsMovies } from 'components/moviesService';

const Cast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  const fetchCast = async movieId => {
    try {
      setIsLoading(true);
      const data = await fetchCreditsMovies(movieId);

      setMovies(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && 'Loading ...'}
      <ul>
        {movies &&
          movies.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : 'http://placehold.it/200x300'
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

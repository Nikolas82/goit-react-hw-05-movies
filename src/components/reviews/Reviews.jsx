import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsMovies } from 'moviesService';

const Reviews = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

  const fetchReviews = async movieId => {
    try {
      setIsLoading(true);
      const data = await fetchReviewsMovies(movieId);

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
          movies.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author:{author}</h4>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;

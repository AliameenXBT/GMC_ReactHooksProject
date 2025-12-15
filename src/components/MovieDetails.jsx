import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";


const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <br /><br />

      <Link to="/">
        <button>⬅ Back to Home</button>
      </Link>
    </div>
  );
};

export default MovieDetails;

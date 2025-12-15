import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, removeMovie }) => {
  return (
    <div className="movie-card">
      {/* Clickable card */}
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <img src={movie.posterURL} alt={movie.title} />

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <span className="rating">⭐ {movie.rating}</span>
        </div>
      </Link>

      {/* Delete button */}
      <button
        className="delete-btn"
        onClick={() => removeMovie(movie.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default MovieCard;

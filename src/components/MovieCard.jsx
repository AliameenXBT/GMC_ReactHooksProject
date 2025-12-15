import "./MovieCard.css";

const MovieCard = ({ movie, removeMovie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />

      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>

        <button className="delete-btn" onClick={removeMovie}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

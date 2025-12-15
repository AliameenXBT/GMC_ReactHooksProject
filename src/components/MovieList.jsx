import MovieCard from "./Moviecard";
import "./MovieList.css";

const MovieList = ({ movies, removeMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id} // ✅ stable key
          movie={movie}
          removeMovie={() => removeMovie(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;

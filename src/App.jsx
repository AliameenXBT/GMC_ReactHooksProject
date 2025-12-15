import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";

// 🔹 IMPORT LOCAL IMAGES
import inceptionImg from "./assets/inception.png";
import interstellarImg from "./assets/interstellar.png";

// 🔹 DEFAULT MOVIES (used only first time)
const defaultMovies = [
  {
    id: 1,
    title: "Inception",
    description: "Dream within a dream",
    posterURL: inceptionImg,
    rating: 5,
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Space and time",
    posterURL: interstellarImg,
    rating: 4,
  },
];

function App() {
  // ✅ LOAD FROM LOCAL STORAGE FIRST
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : defaultMovies;
  });

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  // ✅ SAVE TO LOCAL STORAGE WHENEVER MOVIES CHANGE
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  // ✅ ADD MOVIE
  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  // ✅ REMOVE MOVIE
  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // ✅ FILTER MOVIES
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="app">
      <h1>🎬 Movie App</h1>

      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} removeMovie={removeMovie} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleAddMovie = () => {
    // Optional validation
    if (
      movie.title === "" ||
      movie.description === "" ||
      movie.rating === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // Add movie
    addMovie({
      title: movie.title,
      description: movie.description,
      posterURL: movie.posterURL,
      rating: Number(movie.rating),
    });

    // ✅ RESET INPUTS AFTER CLICK
    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  return (
    <div className="add-movie">
      <input
        type="text"
        placeholder="Title"
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Description"
        value={movie.description}
        onChange={(e) =>
          setMovie({ ...movie, description: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={(e) =>
          setMovie({ ...movie, posterURL: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Rating"
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
      />

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;

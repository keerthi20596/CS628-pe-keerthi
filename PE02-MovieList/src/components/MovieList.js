import React, { useState } from "react";
import "./MovieList.css";

const movies = [
  { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
  { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
  { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
  { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
];

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleGenreChange = (e) => setSelectedGenre(e.target.value);

  const handleMovieClick = (title) => alert(`Movie selected: ${title}`);

  return (
    <div className="movie-list">
      <div className="filter">
        <label htmlFor="genre-select">Filter by Genre:</label>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <ul className="movies">
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;

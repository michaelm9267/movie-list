import React, { useEffect, useState } from "react";

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => {
      setMovies(data)
      console.log(data)
    })
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredMovies.map((movie, index) => (
        <div key={index}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.summary}</p>
            <p>{movie.cast}</p>
            <p>{movie.genre}</p>
            <p>{movie.releaseDate}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

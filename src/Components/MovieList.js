import React, { useEffect, useState } from "react";
import movieData from "../movies.json";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(movieData.movie);
  }, []);

  return (
    <div>
      {movies.map((el, index) => (
        <div key={index}>
            <h3>{el.title}</h3>
            <img src={el.poster} alt={el.title}/>
            <p>{el.summary}</p>
            <p>{el.cast}</p>
            <p>{el.genre}</p>
            <p>{el.releaseDate}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

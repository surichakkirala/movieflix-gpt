import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
export const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 text-white bg-black opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            // title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

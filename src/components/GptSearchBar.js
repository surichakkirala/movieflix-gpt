import React, { useRef } from "react";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import gai from "../utils/gai";
import { API_CONSTANTS } from "../utils/constants";
import { addGptMovieResult } from "../slices/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  //Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_CONSTANTS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GEMINI API to get movie results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of movies, comma seperated like the example result given ahead.";

    const gptResults = await gai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });
    const gptMovies =
      gptResults.candidates?.[0].content?.parts?.[0].text.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-8 md:col-span-9 rounded-sm text-[10px] md:text-base"
          type="text"
          placeholder={languageConstants[langKey].getGptPlaceHolderText}
        />
        <button
          className="m-4 py-2 px-4 bg-red-600 text-white rounded-lg col-span-4 md:col-span-3 text-xs md:text-lg"
          onClick={handleGptSearchClick}
        >
          {languageConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import React from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-sm"
          type="text"
          placeholder={languageConstants[langKey].getGptPlaceHolderText}
        />
        <button className=" m-4 py-2 px-4 bg-red-600 text-white rounded-lg col-span-3">
          {languageConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

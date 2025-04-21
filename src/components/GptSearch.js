import { BG_IMAGE } from "../utils/constants";
import { GptMovieSuggestions } from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_IMAGE}
          alt="logo-login"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};
export default GptSearch;

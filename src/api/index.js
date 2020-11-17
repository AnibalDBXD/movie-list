import Config from "./config";
import axios from "axios";

const { TOKEN, API_URL } = Config;

// Get a Page of PopularMovie, Page are 20 Movies
export const getPopularMovie = (Page) => {
  const URLtoCall = API_URL + `movie/popular?api_key=${TOKEN}&page=${Page}`;
  const result = axios.get(URLtoCall);
  return result;
};

//Get Poster of the movie
export const getPoster = (poster_path) => {
  return `https://image.tmdb.org/t/p/original/${poster_path}`;
};

//Call api to get the Search result
export const Searcher = (movie) => {
  const URLtoCall =
    API_URL + `search/movie?api_key=${TOKEN}&language=en-US&query=${movie}`;
  const result = axios.get(URLtoCall);
  return result;
};

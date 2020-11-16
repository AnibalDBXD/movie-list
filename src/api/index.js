import Config from "./config";
import axios from "axios";

const { TOKEN, API_URL } = Config;

// Get a Page of PopularMovie, Page are 20 Movies
const getPopularMovie = (Page) => {
  const URLtoCall = API_URL + `movie/popular?api_key=${TOKEN}&page=${Page}`;
  const result = axios.get(URLtoCall);
  return result;
};

//Get Poster of the movie
const getPoster = (poster_path) => {
  return `https://image.tmdb.org/t/p/original/${poster_path}`;
};

export { getPopularMovie, getPoster };

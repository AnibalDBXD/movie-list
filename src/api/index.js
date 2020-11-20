import Config from "./config";
import axios from "axios";

const { TOKEN, API_URL } = Config;

//Call api to get the Search result
export const Searcher = (movie) => {
  const URLtoCall =
    API_URL + `search/movie?api_key=${TOKEN}&language=en-US&query=${movie}`;
  const result = axios.get(URLtoCall);
  return result;
};

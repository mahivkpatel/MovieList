import axios from "axios";
import { REQUEST_URL, API_KEY } from "./utils/Constants";

const movies = (type) => {
  return axios.get(`${REQUEST_URL}/movie/${type}?api_key=${API_KEY}`);
};

export default { movies };

import { useEffect, useState } from "react";
//import {getMovie} from '../api/tmdb-api'
import { getMovie } from "../../api/movies-api";
const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie;
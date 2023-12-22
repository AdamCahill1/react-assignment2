import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/authContext";
import { addToFavourite } from "../../api/movies-api";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const acontext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToFavorites = (e) => {
    if (acontext.isAuthenticated) {
      e.preventDefault();

      console.log(movie.id, movie.title)
      addToFavourite(movie.id, movie.title)

      context.addToFavorites(movie);
    } else {
      navigate('/login', { replace: true })
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon style={{ color: "red" }} fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;
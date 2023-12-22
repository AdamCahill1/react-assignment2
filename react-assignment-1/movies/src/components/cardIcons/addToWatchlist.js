import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { AuthContext } from "../../contexts/authContext";

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const acontext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToWatchlist = (e) => {
    if (acontext.isAuthenticated) {
      e.preventDefault();
      context.addToWatchlist(movie);
    } else {
      navigate('/login', { replace: true })
    }  
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;
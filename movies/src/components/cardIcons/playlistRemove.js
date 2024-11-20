import React, { useContext } from "react";
import RemoveFromPlaylistIcon from "@mui/icons-material/PlaylistRemove";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const PlaylistRemoveIcon = ({ movie }) => {
const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    // context.removeFromMustWatch(movie);
  };
    return (
        <IconButton aria-label="remove from playlist" onClick={handleAddToMustWatch}>
          <RemoveFromPlaylistIcon color="primary" fontSize="large" />
        </IconButton>
      );
};

export default PlaylistRemoveIcon;
import React, { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from "../components/cardIcons/playlistAdd";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const TrendingMovies = (props) => {

  const [time_window, setTimeWindow] = useState("day");
  const {  data, error, isLoading, isError }  = useQuery
    (["trendingMovies", { time_window }], getTrendingMovies)
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
      <ButtonGroup sx={{display: "flex", justifyContent: "center", alignItems: "center"}} variant="outlined">
        <Button
          onClick={() => setTimeWindow("day")}
          variant={time_window === "day" ? "contained" : "outlined"}
        >
          Day
        </Button>
        <Button
          onClick={() => setTimeWindow("week")}
          variant={time_window === "week" ? "contained" : "outlined"}
        >
          Week
        </Button>
      </ButtonGroup>
      <PageTemplate
        title={`Trending Movies (${time_window})`}
        movies={movies}
        action={(movie) => (
          <>
            <AddToFavoritesIcon movie={movie} />
            <PlaylistAddIcon movie={movie} />
          </>
        )}
      />
    </>
);
};
export default TrendingMovies;
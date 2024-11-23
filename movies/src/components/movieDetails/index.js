import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import { useQuery } from "react-query";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { getMovieCredits } from "../../api/tmdb-api";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data: credits, error, isLoading, isError } = useQuery(
    ["credits", { id: movie.id }],
    getMovieCredits
  );

  const cast = credits?.cast || []; // prevent "credits is undefined" error
    // console.log(credits);
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      
      <Typography variant="h5" component="h3" sx={{ marginTop: "20px" }}>
        Cast
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          padding: "10px",
          whiteSpace: "nowrap",
        }}
      >
        {cast.map((member) => (
          <Chip
            key={member.credit_id}
            avatar={
              member.profile_path ? (
                <Avatar
                  alt={member.name}
                  src={`https://image.tmdb.org/t/p/w92${member.profile_path}`}
                />
              ) : (
                <Avatar>{member.name}</Avatar>
              )
            }
            label={`${member.name} as ${member.character}`}
            sx={{ marginRight: "5px" }}
          />
        ))}
      </Box>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;
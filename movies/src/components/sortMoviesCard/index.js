import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function SortMoviesCard(sortOption, onSortChange) {

  
 
  const handleChange = (e) => { 
    onSortChange(e.target.value);;
  };

  
  return (
    <Card
      sx={{
        backgroundColor: "rgb(153, 153, 255)",
        height: 200,
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6" component="h1">
          Sort Movies
        </Typography>
        <FormControl sx={{ ...formControl }}>
          <Select
            id="sort-select"
            value={sortOption}
            onChange={handleChange}
          >
            <MenuItem value="popularity.desc">Most Popular</MenuItem>
            <MenuItem value="vote_average.desc">Highest Rated</MenuItem>
            <MenuItem value="release_date.desc">Newest Releases</MenuItem>
            <MenuItem value="original_title.asc">Title (A-Z)</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}
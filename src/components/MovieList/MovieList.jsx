import React, { useEffect } from "react";
import { Box } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";
import { MainContext, useContext } from "../../hooks/Context";
import { FetchMovies } from "../../helpers/FetchMovies";

const MovieList = () => {
  const { movies, setMovies, searchValue } = useContext(MainContext);

  useEffect(() => {
    FetchMovies(searchValue);
    setMovies(JSON.parse(localStorage.getItem("movieArr")));
  }, [searchValue]);

  return (
    <Box id="listWrapper" sx={{ display: "flex", flexWrap: "wrap" }}>
      {movies?.map((movie) => (
        <Box key={movie?.id} sx={{ padding: "1rem", marginBottom: 10 }}>
          <MovieCard key={movie?.id} movie={movie} />
        </Box>
      ))}
    </Box>
  );
};

export default MovieList;

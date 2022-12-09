//React
import React, { useEffect, useState } from "react";

//Style & MUI
import "./App.css";
import { Container, Box } from "@mui/material";

//Components
import Header from "./components/Header/Header";
import SearchMovie from "./components/SearchInput/SearchInput";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

//Context
import { MainContext } from "./hooks/Context";

//Hooks
import switchTheme from "./helpers/SwitchTheme";
import { FetchMovies } from "./helpers/FetchMovies";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [state, setState] = useState({});
  const [movies, setMovies] = useState([]);
  const appendStates = (newMethods) => {
    setState({ ...state, ...newMethods });
  };

  const globalState = {
    theme,
    setTheme,
    movies,
    setMovies,
    appendStates,
    ...state,
  };

  useEffect(() => {
    FetchMovies();
    setMovies(JSON.parse(localStorage.getItem("movieArr")));
  }, []);

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

  return (
    <MainContext.Provider value={globalState}>
      <Header />
      <Container maxWidth="md">
        <Box
          sx={{
            paddingY: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchMovie />
          <Form />
        </Box>
        <Box>
          <MovieList />
        </Box>
      </Container>
      <Footer />
    </MainContext.Provider>
  );
};

export default App;

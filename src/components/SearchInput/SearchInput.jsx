import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MainContext, useContext } from "../../hooks/Context";
import { SearchForm, SearchInput, SearchButton } from "./SearchInput.styled";

const SearchMovie = () => {
  const [searchValue, setSearchValue] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const { movies, appendStates } = useContext(MainContext);

  console.log("Movies", movies);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
    setBarOpened(false);
  };

  useEffect(() => {
    appendStates({ searchValue });
  }, [searchValue]);

  return (
    <SearchForm
      barOpened={barOpened}
      onClick={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onFocus={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onBlur={() => {
        setBarOpened(false);
      }}
      onSubmit={onFormSubmit}
      ref={formRef}
    >
      <SearchButton type="submit" barOpened={barOpened}>
        <SearchIcon />
      </SearchButton>
      <SearchInput
        onChange={(e) => setSearchValue(e.target.value)}
        ref={inputFocus}
        value={searchValue}
        barOpened={barOpened}
        placeholder="Search for a movie..."
      />
    </SearchForm>
  );
};
export default SearchMovie;

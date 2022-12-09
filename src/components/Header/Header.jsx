import React from "react";
import { HeaderWrapper, DarkLightBtn, MoviesLogo } from "./Header.styled";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { MainContext, useContext } from "../../hooks/Context";

const Header = () => {
  const { theme, setTheme } = useContext(MainContext);
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <HeaderWrapper>
      <MoviesLogo>MOVIES</MoviesLogo>
      <DarkLightBtn onClick={switchTheme}>
        <LightbulbIcon />
      </DarkLightBtn>
    </HeaderWrapper>
  );
};

export default Header;

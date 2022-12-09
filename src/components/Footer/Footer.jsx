import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FooterWrapper, CreatedLink } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      Created By
      <CreatedLink href="https://www.linkedin.com/in/ismailkiziltas/">
        İsmail KIZILTAŞ
      </CreatedLink>
      <LinkedInIcon />
    </FooterWrapper>
  );
};

export default Footer;

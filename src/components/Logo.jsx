import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { scrollToTop } from "../helper";
import { useState, useEffect } from "react";

const LogoContainer = styled.div`
  text-align: left;
  height: 100%;
  padding-left: 50px;
  position: relative;

  img {
    height: 100%;
  }

  #cat {
    opacity: 0;
    height: 90%;
    padding-left: 10px;
    position: absolute;
    left: 140px;
    bottom: -10px;
    transition: opacity 0.3s ease;
    visibility: hidden;
  }

  &:hover #cat {
    opacity: 1;
    visibility: visible; /* Ensure the image is only visible on hover */
  }
`;

function Logo() {

  useEffect(() => {
    // Preload the cat GIF when the component mounts
    const catImage = new Image();
    catImage.src = `${import.meta.env.BASE_URL}images/cat_walking_home.gif`;
  }, []);

  return (
    <LogoContainer>
      <NavLink
        to="/"
        className="nav-link"
        id="home"
        onClick={scrollToTop}
      >
        <img src={`${import.meta.env.BASE_URL}images/icons/cabin.jpeg`} alt="home icon" />
      </NavLink>
      <img
        id="cat"
        src={`${import.meta.env.BASE_URL}images/cat_walking_home.gif`} // Use the preloaded image URL
        alt="cat walking"
      />
    </LogoContainer>
  );
};

export default Logo;
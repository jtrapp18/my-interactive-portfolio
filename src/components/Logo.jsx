import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { scrollToTop } from "../helper";
import { useState, useEffect } from "react";

const LogoContainer = styled.div`
  text-align: left;
  height: 100%;
  margin-left: 20px;
  position: relative;

  img {
    height: 100%;
  }

  #cat {
    opacity: 0;
    height: 90%;
    padding-left: 10px;
    position: absolute;
    left: 60px;
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
  const [catLoaded, setCatLoaded] = useState(false);

  useEffect(() => {
    // Preload the cat GIF when the component mounts
    const catImage = new Image();
    catImage.src = `${import.meta.env.BASE_URL}images/cat_walking_home.gif`;
    catImage.onload = () => setCatLoaded(true); // Set state when it's loaded
  }, []);

  return (
    <LogoContainer>
      <NavLink
        to="/"
        className="nav-link"
        id="home"
        onClick={scrollToTop}
      >
        <img src={`${import.meta.env.BASE_URL}images/icons/cabin.png`} alt="home icon" />
      </NavLink>
      {/* The cat image will be shown on hover, but not reloaded each time */}
      <img
        id="cat"
        src={`${import.meta.env.BASE_URL}images/cat_walking_home.gif`} // Use the preloaded image URL
        alt="cat walking"
      />
    </LogoContainer>
  );
};

export default Logo;
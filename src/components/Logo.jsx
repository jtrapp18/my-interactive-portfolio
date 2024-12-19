import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  }

  &:hover #cat {
    opacity: 1;
  }
` 

function Logo() {

    const handleMouseEnter = (event) => {
      const catImage = event.target;
      catImage.src = "/images/cat_walking_home.gif";
    };

  return (
      <LogoContainer>
        <NavLink
          to="/"
          className="nav-link"
          id="home"
        >
          <img src="/images/icons/cabin.png" alt="home icon"/>
        </NavLink>
        <img 
          id="cat" 
          src=""
          alt="cat walking"
          onMouseEnter={handleMouseEnter}
        />
      </LogoContainer>
  );
};

export default Logo;
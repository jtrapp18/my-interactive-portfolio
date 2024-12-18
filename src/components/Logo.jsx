import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: left;
  height: 100%;
  margin-left: 20px;

  img {
    // width: 115px;
    height: 100%;
  }

  & img:hover {
    zoom: 120%;
  }
` 

function Logo() {
  return (
      <LogoContainer>
        <NavLink
          to="/"
          className="nav-link home"
        >
          <img src="/images/icons/cabin.png" alt="home icon"/>
        </NavLink>
      </LogoContainer>
  );
};

export default Logo;
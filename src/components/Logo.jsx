import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: left;

  img {
    width: 115px;
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
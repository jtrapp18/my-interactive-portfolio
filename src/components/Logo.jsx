import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: left;
` 

function Logo() {
  return (
      <LogoContainer>
        <NavLink
          to="/"
          className="nav-link home"
        >
          Home
        </NavLink>
      </LogoContainer>
  );
};

export default Logo;
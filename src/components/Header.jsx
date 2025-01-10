import React from 'react';
import NavBar from "./NavBar"
import MobileNavBar from './MobileNavBar';
import UseWindowWidth from '../hooks/windowSize';
import Headroom from 'react-headroom';
import styled from 'styled-components';

const StyledHeader = styled(Headroom)`
  padding: 0;
  border-bottom: 3px solid var(--green);
  animation: slideDown 1s;
`

const Header = () => {
    const isMobile = UseWindowWidth();
    
    return (
        <StyledHeader>
          {isMobile ? <MobileNavBar /> : (<NavBar />)}
        </StyledHeader>
    );
}

export default Header;

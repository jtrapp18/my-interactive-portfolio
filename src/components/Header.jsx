import React from 'react';
import NavBar from "./NavBar"
import MobileNavBar from './MobileNavBar';
import UseWindowWidth from '../hooks/windowSize';
import Headroom from 'react-headroom';

const Header = () => {
    const isMobile = UseWindowWidth();
    
    return (
        isMobile ? (
            <MobileNavBar />
          ) : (
            <Headroom>
              <NavBar />
            </Headroom>
          )
    );
}

export default Header;

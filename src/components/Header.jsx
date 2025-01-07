import React from 'react';
import NavBar from "./NavBar"
import MobileNavBar from './MobileNavBar';
import UseWindowWidth from '../hooks/windowSize';

const Header = () => {
    const width = UseWindowWidth();
    const isMobile = width <= 768;  // You can adjust this value as needed

    return (
        <header>
            {isMobile ? <MobileNavBar /> : <NavBar />}
        </header>
    );
}

export default Header;

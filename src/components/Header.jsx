import React from 'react';
import NavBar from "./NavBar"
import styled from 'styled-components';

const ExtendedHeader = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 175px;
    // color: white;
    width: 100%;
    background-color: white;

    img {
        height: auto; 
        max-height: 150px; 
        width: auto; 
        max-width: 100%; 
        cursor: pointer; 
    }

    i {
        position: absolute;
        color: gray;
        right: 20px;
        bottom: 0;
        text-align: end;
        font-size: 12px;
    }
`;

const Header = () => {
    return (
        <header>
            <ExtendedHeader>
                <h2>Hello, my name is</h2>
                <h1>Jacqueline</h1>
            </ExtendedHeader>
            <NavBar />
        </header>
    );
}

export default Header;

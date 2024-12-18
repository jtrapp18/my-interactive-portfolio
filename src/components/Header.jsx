import React from 'react';
import NavBar from "./NavBar"
import styled from 'styled-components';

const ExtendedHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 175px;
    // color: white;
    width: 100%;
    background-color: white;

    & * {
        margin: 5px;
    }

    img {
        height: auto; 
        max-height: 150px; 
        width: auto; 
        max-width: 100%; 
        cursor: pointer; 
    }

    h1 {
        animation: var(--typing-animation);
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
    }
`;

const Header = () => {
    return (
        <header>
            <ExtendedHeader>
                {/* <h1>Hello, my name is <strong>Jacqueline</strong></h1>
                <p>I'm a <strong>Full-Stack Developer</strong> in New Hampshire</p> */}
            </ExtendedHeader>
            <NavBar />
        </header>
    );
}

export default Header;

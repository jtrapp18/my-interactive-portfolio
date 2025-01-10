import React from 'react';
import styled from 'styled-components';
import data from "../data"
import Socials from './Socials';

const StyledSection = styled.section`
    position: absolute;
    bottom: 0;
    
    p {
        text-align: center;
    }

    span, #socials-container {
    justify-content: center;    
    }

    #socials-container {
        display: flex;
    }
    
    .logo {
        width: 40px;
        margin: 20px;
    }
    
    .logo:hover {
        width: 50px;
        cursor: pointer;
    }

    span {
        background-color: black;
        display: flex;
    }

    span p {
        color: white;
        margin: 2px;
    }

    span p:hover {
        background: linear-gradient(to right, var(--green), var(--light-green));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const FooterMain = () => {
    const socials = data.socials;

    return (
        <StyledSection>
            <Socials />
            <p>© 2025 Jacqueline Trapp. All rights reserved.</p>
        </StyledSection>
    );
}

export default FooterMain;

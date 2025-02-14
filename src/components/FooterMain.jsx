import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

const StyledSection = styled.section`
    position: absolute;
    bottom: 0;
    
    p {
        text-align: center;
    }

    span {
        justify-content: center;    
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
    return (
        <StyledSection>
            <Socials />
            <p>© 2025 Jacqueline Trapp. All rights reserved.</p>
        </StyledSection>
    );
}

export default FooterMain;

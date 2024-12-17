import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding-top: 50px;

    &* {
        align-items: center;
        justify-content: center;
        text-align: center;
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

    #end-note {
        background-color: black;
        color: white;
    }
` 

const Footer = () => {
    const logos = ["github-mark.png", "LI-Black.png", "Instagram_Glyph_Black.jpg"]
    return (
        <StyledFooter>
            <p>This is some basic information</p>
            <div id="socials-container">
                {logos.map(logo=>
                    <img
                        key={logo}
                        className="logo"
                        src={`images/logos/${logo}`}
                        alt={logo}
                    >
                    </img>
                )}
            </div>
            <span id="end-note">Jacqueline Trapp</span>
        </StyledFooter>
    );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';
import data from "../data"

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
    const socials = data.socials;

    return (
        <StyledFooter>
            <p>This is some basic information</p>
            <div id="socials-container">
                {socials.map(social=>
                    <a href={social.link} 
                        key={social.name}>
                        <img
                            className="logo"
                            src={`images/logos/${social.image}`}
                            alt={social.name}
                        >
                    </img>
                    </a>
                )}
            </div>
            <span id="end-note">Jacqueline Trapp</span>
        </StyledFooter>
    );
}

export default Footer;

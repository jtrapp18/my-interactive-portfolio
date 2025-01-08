import React from 'react';
import styled from 'styled-components';
import data from "../data"

const StyledSection = styled.section`
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
            <p>This is some basic information</p>
            <div id="socials-container">
                {socials.map(social=>
                    <a 
                        href={social.link} 
                        key={social.id}
                        target="_blank"
                        title={`Click to go to my ${social.name} page`} 
                    >
                        <img
                            className="logo"
                            src={`${import.meta.env.BASE_URL}images/logos/${social.image}`}
                            alt={social.name}
                        >
                    </img>
                    </a>
                )}
            </div>
        </StyledSection>
    );
}

export default FooterMain;

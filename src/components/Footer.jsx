import React from 'react';
import styled from 'styled-components';
import data from "../data"

const StyledFooter = styled.footer`
    padding-top: 20px;
    background: linear-gradient(to bottom, var(--light-green), white);
    background-image: url('/images/birch_paneling.jpeg');
    background-size: cover;

    & * {
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

const StyledDivider = styled.img`
    width: 200px;
`

const Footer = () => {
    const socials = data.socials;

    return (
        <StyledFooter>
            <div><StyledDivider src="/images/dividers/split_leaf_divider.png" /></div>
            <p>This is some basic information</p>
            <div id="socials-container">
                {socials.map(social=>
                    <a href={social.link} 
                        key={social.name}
                        target="_blank">
                        <img
                            className="logo"
                            src={`images/logos/${social.image}`}
                            alt={social.name}
                        >
                    </img>
                    </a>
                )}
            </div>
            <span>
                <p>Python</p><p>|</p>  
                <p>React</p><p>|</p>
                <p>JavaScript</p><p>|</p>
                <p>VBA</p><p>|</p>
                <p>CSS</p><p>|</p>
                <p>HTML</p><p>|</p>
                <p>Power BI</p>
            </span>
            {/* <span>Jacqueline Trapp</span> */}
        </StyledFooter>
    );
}

export default Footer;

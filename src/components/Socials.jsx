import React from 'react';
import styled from 'styled-components';
import data from "../data"

const StyledDiv = styled.div`
    display: flex;
    height: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;

    a {
        width: 40px;
        margin: 0px 20px 0px 20px;
        height: 100%;
        display: flex;
        justify-content: center;

        .logo {
            width: 100%;
        }
        
        img.logo:hover {
            cursor: pointer;
            zoom: 1.1;
        }
    }
`

const Socials = () => {
    const socials = data.socials;

    return (
        <StyledDiv>
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
        </StyledDiv>
    );
}

export default Socials;

import React from 'react';
import styled from 'styled-components';
import data from "../data"

const StyledDiv = styled.div`
    display: flex;
    
    .logo {
        width: 40px;
        margin: 20px;
    }
    
    .logo:hover {
        width: 50px;
        cursor: pointer;
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

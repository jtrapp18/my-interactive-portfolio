import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    background-color: black;
    display: flex;

    p {
        color: white;
        margin: 2px;
    }

    p:hover {
        background: linear-gradient(to right, var(--green), var(--light-green));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Languages = ({languages}) => {
    return (
            <StyledSpan>
                {languages.map((language, index) =>
                    <>
                        <p>{language}</p>
                        {index<languages.length - 1 &&
                        (<p>|</p>)}
                    </>
                )}
            </StyledSpan>
    );
}

export default Languages;

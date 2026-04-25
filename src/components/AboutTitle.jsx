import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
    &.active {
        animation: pop 3s;
    }

    font-size: clamp(3rem, calc(100vw / 8), 5rem);
    margin-bottom: 0px;
    margin-top: 10px;
    width: fit-content;
    display: flex;

    strong {
        color: var(--green);
    }
`;

const StyledSubtitle = styled.h3`
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.4rem);
`

const AboutTitle = ({ title, subtitle }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <>
            <StyledTitle>
                {title}<strong>.</strong>
            </StyledTitle>
            {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </>
    );
};

export default AboutTitle;
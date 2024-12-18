import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: grid;
    height: var(--size-body);
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Home = () => {
    const seasons = ["winter", "spring", "summer", "fall"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const changeSeason = () => {
            setIndex((prevIndex) => (prevIndex + 1) % seasons.length);
        };
        const intervalId = setInterval(changeSeason, 5000);
    
        return () => clearInterval(intervalId);

    }, [index]);

    return (
        <main>
            <StyledDiv>
                <img
                    src={`/images/${seasons[index]}.jpg`}
                    alt={seasons[index]}
                />
            </StyledDiv>
        </main>
    );
}

export default Home;

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: grid;

    img {
        width: 100%;
    }
`

const Home = () => {
    const seasons = ["winter", "spring", "summer", "fall"]
    return (
        <main>
            <StyledDiv>
                {seasons.map(season=>
                    <img key={season}
                        src={`/images/${season}.jpg`}
                        alt={season}
                    />
                )}
            </StyledDiv>
        </main>
    );
}

export default Home;

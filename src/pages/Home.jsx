import React from 'react';
import styled from 'styled-components';

const HomeImg = styled.img`
    width: 100%;
`

const Home = () => {
    const seasons = ["winter", "spring", "summer", "fall"]
    return (
        <main>
            {seasons.map(season=>
                <HomeImg key={season}
                    src={`/images/${season}.jpg`}
                    alt={season}>
                </HomeImg>
            )}
        </main>
    );
}

export default Home;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TypeAnimation } from '../MiscStyling';

const StyledDiv = styled.div`
  display: grid;
  height: var(--size-body);
  position: relative;

  section {
    position: absolute;
    bottom: 50%;
    width: 100%;
    z-index: 1;

    h1, p {
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, .9);
      text-align: center;
    }

    h1 {
      ${TypeAnimation};        
      font-size: 50px;
    }

    p {
      animation: fadeIn 8s;        
      font-size: 20px;
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out; /* Smooth transition */
    opacity: 0; /* Set initial opacity to 0 */
  }

  .visible {
    opacity: 1; /* Set opacity to 1 for visible image */
  }
`;

const Home = () => {
  const seasons = ["winter", "spring", "summer", "fall"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeSeason = () => {
      setIndex((prevIndex) => (prevIndex + 1) % seasons.length);
    };
    const intervalId = setInterval(changeSeason, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <StyledDiv>
        <section>
          <h1>Hello, my name is <strong>Jacqueline</strong></h1>
          <p>I'm a <strong>Full-Stack Developer</strong> in New Hampshire</p>
        </section>
        
        {/* Add visibility class based on index */}
        {seasons.map((season, idx) => (
          <img
            key={season} // Ensure a unique key for each image
            src={`/images/${season}.jpg`}
            alt={season}
            className={idx === index ? 'visible' : ''}
          />
        ))}
      </StyledDiv>
    </main>
  );
};

export default Home;

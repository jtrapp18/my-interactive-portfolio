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
      font-family: 'Cascadia Code', sans-serif;;
      color: white;
      text-shadow: 5px 7px 4px rgba(0, 0, 0, .7);
      text-align: center;
    }

    h1 {
      ${TypeAnimation};        
      font-size: clamp(1rem, calc(100vw / 15), 5rem);
    }

    strong {
      color:rgb(255, 255, 157);
    }

    h1:hover strong, p:hover strong {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px white;
      zoom: 130%;
      font-weight: bold;
    }

    p {
      // opacity: 0;
      animation: pauseShow 3s ease-in-out 0s forwards, fadeIn 3s ease 3s forwards;
      // animation-delay: 3s;
      font-size: clamp(.5rem, calc(100vw / 30), 2rem);
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 3s ease-in-out;
    opacity: 0;
  }

  .visible {
    opacity: 1;
  }
`;

const Home = () => {
  const seasons = ["fall", "winter", "spring", "summer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeSeason = () => {
      setIndex((prevIndex) => (prevIndex + 1) % seasons.length);
    };
    const intervalId = setInterval(changeSeason, 7000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <StyledDiv>
        <section>
          <h1>Hi, I'm <strong>Jacqueline</strong></h1>
          <p>I'm an <strong>Actuary</strong> and <strong>Full-Stack Developer</strong></p>
        </section>
        
        {seasons.map((season, idx) => (
          <img
            key={season}
            src={`${import.meta.env.BASE_URL}images/seasons/${season}.jpg`}
            alt={season}
            className={idx === index ? 'visible' : ''}
          />
        ))}
      </StyledDiv>
    </main>
  );
};

export default Home;

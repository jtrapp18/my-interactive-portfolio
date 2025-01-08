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
      font-family: 'Cascadia Code', 'Cascadia', sans-serif;
      color: white;
      text-shadow: 5px 7px 4px rgba(0, 0, 0, .7);
      text-align: center;
    }

    h1 {
      ${TypeAnimation};
      font-size: clamp(1rem, calc(100vw / 12), 6rem);
    }

    strong {
      color: rgb(255, 255, 157);
    }

    h1:hover strong, p:hover strong {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px white;
      zoom: 130%;
      font-weight: bold;
    }

    p {
      font-size: clamp(1rem, calc(100vw / 25), 2.5rem);
      animation: pauseShow 3s ease-in-out 0s forwards, fadeIn 3s ease 3s forwards;
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
  const [imageLoaded, setImageLoaded] = useState(false); // Track image loading status
  const [showText, setShowText] = useState(false); // Control when to show text

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = `${import.meta.env.BASE_URL}images/seasons/fall.jpg`; // Preload the first image
    firstImage.onload = () => {
      setImageLoaded(true); // Set state when the first image is loaded
      setShowText(true); // Start showing the text once the image is loaded
    };

    const changeSeason = () => {
      setIndex((prevIndex) => (prevIndex + 1) % seasons.length);
    };

    const intervalId = setInterval(changeSeason, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <StyledDiv>
        {imageLoaded && showText && (
          <section>
            <h1>Hi, I'm <strong>Jacqueline</strong></h1>
            <p>I'm an <strong>Actuary</strong> and <strong>Full-Stack Developer</strong></p>
          </section>
        )}

        {seasons.map((season, idx) => (
          <img
            key={season}
            src={`${import.meta.env.BASE_URL}images/seasons/${season}.jpg`}
            alt={season}
            className={idx === index && imageLoaded ? 'visible' : ''}
          />
        ))}
      </StyledDiv>
    </main>
  );
};

export default Home;
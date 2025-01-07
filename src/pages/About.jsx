import React, { useRef, useState } from 'react';
import styled from "styled-components";
import data from "../data";
import ChooseSection from '../hooks/chooseSection';
import ScrollButtons from '../components/ScrollButtons';
import Languages from '../components/Languages';

const StyledMain = styled.main`
    box-sizing: border-box;
    display: grid;
    position: relative;
    justify-items: center;
    align-items: center;
    margin: 0;
    width: 100%;
    background-image: url("images/birch_trees.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: calc(100vh - 5px);

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
`;

const StyledArticle = styled.article`
    scroll-snap-align: start;
    scroll-margin-top: 80px;
    box-sizing: border-box;
    padding: 20px 100px 100px 100px;
    height: var(--size-body);
    width: 90%;

    h1 {
        font-size: clamp(1rem, calc(100vw / 15), 5rem);
        margin-bottom: 10px;
        animation: slideRight 1s;
        width: fit-content;
    }

    section {
        background: rgba(255, 255, 255, 0.9);
        padding: 0px 20px 20px 20px;
        position: relative;
        width: 100%;
    }

    .about-info {
        display: grid;
        width: 100%;
        max-height: 90%;
        grid-template-columns: 1fr 1fr; /* Default two equal columns */
        gap: 25px;
        animation: slideLeft 1s;
    }

    .about-info > :only-child {
        grid-column: span 2; /* Makes the single item take up both columns */
    }

    @media screen and (min-width: 600px) {
        .about-info {
            grid-template-columns: 2fr 1fr; /* For two items, first column takes 2 parts, second takes 1 part */
        }
    }
        
    img {
        width: 100%;
        max-width: 500px;
    }
`;

const About = () => {
    const aboutMe = data.aboutMe;
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // Track current section index

    // const [scrollDown, scrollUp] = ChooseSection(containerRef, sectionsRef, currentSectionIndex, setCurrentSectionIndex);

    return (
        <StyledMain ref={containerRef}>
            {aboutMe.map((about, index) => (
                <StyledArticle key={about.id} image={about.background}>
                    <section
                        ref={(el) => (sectionsRef.current[index] = el)}
                    >
                        <h1>{about.label}</h1>
                        {index===2 && (<Languages languages={data.languages}/>)}
                        <div className="about-info">
                            <p>
                                {about.details.split('\n').map((line, index) => (
                                    <>
                                        {line}
                                        {index < about.details.split('\n').length - 1 && <br />}
                                    </>
                                ))}
                            </p>
                            {about.image && (<img
                                src={`${import.meta.env.BASE_URL}${about.image}`}
                                alt={about.image}
                            />)}
                        </div>
                    </section>
                </StyledArticle>
            ))}
        <ScrollButtons
            containerRef={containerRef}
            sectionsRef={sectionsRef}
            setCurrentSectionIndex={setCurrentSectionIndex}
        />
        </StyledMain>
    );
};

export default About;
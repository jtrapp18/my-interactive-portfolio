import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import data from "../data";
import ScrollButtons from '../components/ScrollButtons';
import Languages from '../components/Languages';
import { Link } from "react-router-dom";
import TechnicalHighlights from '../components/TechnicalHighlights';

const StyledMain = styled.main`
    box-sizing: border-box;
    display: grid;
    position: relative;
    justify-items: center;
    align-items: center;
    margin: 0;
    background-image: url("images/birch_trees.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: var(--size-body);

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
`;

const StyledArticle = styled.article`
    scroll-snap-align: start;
    scroll-margin-top: 90px;
    height: var(--size-body);
    width: 85%;
    // transform: translateX(-5%);
    align-items: center;
    display: flex;

    h2 {
        font-size: clamp(1rem, calc(100vw / 15), 5rem);
        margin-bottom: 0px;
        margin-top: 10px;
        animation: slideRight 1s;
        width: fit-content;
    }

    section {
        background: rgba(255, 255, 255, 0.9);
        padding: 0px 20px 20px 20px;
        box-shadow: var(--shadow);
        position: relative;
        width: 100%;
        border-radius: 20px;
    }

    .about-info {
        display: grid;
        width: 100%;
        max-height: 90%;
        grid-template-columns: 2fr 1fr;
        gap: 25px;
        animation: slideLeft 1s;
    }

    .about-info > :only-child {
        grid-column: span 2; /* Makes the single item take up both columns */
    }

    @media screen and (max-width: 768px) {
        .about-info {
            grid-template-columns: 1fr;
            gap: 0;
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

    // Update section index on scroll
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;

            if (container) {
                const scrollTop = container.scrollTop;
                const sectionIndex = sectionsRef.current.findIndex((section, index) => {
                    const nextSection = sectionsRef.current[index + 1];
                    const top = section.offsetTop;
                    const bottom = nextSection ? nextSection.offsetTop : container.scrollHeight;

                    return scrollTop >= top && scrollTop < bottom;
                });

                if (sectionIndex !== -1 && sectionIndex !== currentSectionIndex) {
                    setCurrentSectionIndex(sectionIndex);
                }
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [currentSectionIndex]);

    return (
        <StyledMain ref={containerRef}>
            {aboutMe.map((about, index) => (
                <StyledArticle
                    ref={(el) => (sectionsRef.current[index] = el)}
                    key={about.id}
                    image={about.background}
                >
                    <section>
                        <h2>{about.label}</h2>
                        {index === 2 && <Languages languages={data.languages} />}
                        <div className="about-info">
                            <p>
                                {about.details.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < about.details.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            {index === 2 && 
                            <>
                                For detailed examples of how I applied these tools, visit the{" "}
                                <Link to="/projects">Projects</Link> or{" "}
                                <Link to="/relevant-work">Relevant Work</Link> pages.
                            </>}
                            </p>
                            {about.image && (
                                <img
                                    src={`${import.meta.env.BASE_URL}${about.image}`}
                                    alt={about.image}
                                />
                            )}
                        </div>
                    </section>
                </StyledArticle>
            ))}
                <StyledArticle ref={(el) => (sectionsRef.current[2] = el)}>
                    <TechnicalHighlights />
                </StyledArticle>
            <ScrollButtons
                containerRef={containerRef}
                sectionsRef={sectionsRef}
                currentSectionIndex={currentSectionIndex}
            />
        </StyledMain>
    );
};

export default About;
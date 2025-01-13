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
    width: 65%;
    background: rgba(255, 255, 255, 0.9);
    // transform: translateX(-5%);
    align-items: center;
    display: flex;

    &.active h2 {
        animation: pop 1.5s;
    }

    h2:hover {
        zoom: 1.1;
        color: var(--green);

        strong {
            color: black;
        }
    }

    h2 {
        font-size: clamp(3rem, calc(100vw / 8), 5rem);
        margin-bottom: 0px;
        margin-top: 10px;
        // animation: slideRight 1s;
        width: fit-content;
        display: flex;

        strong {
            color: var(--green);
            // font-size: clamp(2rem, calc(100vw / 10), 10rem);
        }
    }

    h3 {
        margin: 0;
    }

    section {
        padding: 0px 30px 0px 30px;
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
        // animation: slideLeft 1s;
    }

    .about-info > :only-child {
        grid-column: span 2;
    }

    img {
        width: 100%;
        max-width: 500px;
        border-radius: 200px;
    }

    @media screen and (max-width: 768px) {
        .about-info {
            grid-template-columns: 1fr;
            gap: 0;
            // justify-items: center;
        }
        
        width: 90%;

        img {
            width: 70%;
            border-radius: 0px;
        }
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
                    className={currentSectionIndex === index ? 'active' : ''}
                >
                    <section>
                        <h2>
                            {about.label}<strong>.</strong>
                        </h2>
                        {about.tagline && (<h3>{about.tagline}</h3>)}
                        <div className="about-info">
                            <p>
                                {about.details.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < about.details.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
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
                <StyledArticle 
                    ref={(el) => (sectionsRef.current[aboutMe.length] = el)}
                    className={currentSectionIndex === aboutMe.length ? 'active' : ''}
                >
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
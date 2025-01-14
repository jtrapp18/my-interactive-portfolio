import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import data from "../data";
import ScrollButtons from '../components/ScrollButtons';
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
    height: var(--size-body);
    margin: 0;
    width: 65%;
    background: rgba(255, 255, 255, 0.9);
    align-items: center;
    display: flex;

    &.active h2 {
        animation: pop 1.5s;
    }

    &.active h3, &.active p {
        animation: fade 1.5s;
    }

    h2 {
        font-size: clamp(3rem, calc(100vw / 8), 5rem);
        margin-bottom: 0px;
        margin-top: 10px;
        width: fit-content;
        display: flex;

        strong {
            color: var(--green);
        }
    }

    p {
        font-size: clamp(.8rem, 1.5vw, 1.1rem);
    }

    h3 {
        margin: 0;
        font-size: clamp(1rem, 2vw, 1.5rem);
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
    }

    .about-info > :only-child {
        grid-column: span 2;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        .about-info {
            display: flex;
            flex-direction: column;
            gap: 0;
        }
    }
`;

const ImageContainer = styled.div`
    position: relative;
    height: 0;

    width: 100%;
    padding-top: 100%;
    max-width: 500px;
    border-radius: 200px;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }

    img.active {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        width: 70%;
        border-radius: 0px;
        padding-top: 70%;
    }
`;


const About = () => {
    const aboutMe = data.aboutMe;
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
    
            if (container) {
                const scrollTop = container.scrollTop;
                const containerHeight = container.offsetHeight;
                const scrollBottom = scrollTop + containerHeight;
    
                const sectionIndex = sectionsRef.current.findIndex((section, index) => {
                    const top = section.offsetTop;
                    const bottom = section.offsetTop + section.offsetHeight;
    
                    // For the last section, ensure it stays active when scrolled to the bottom
                    if (index === sectionsRef.current.length - 1) {
                        return scrollBottom >= top;
                    }
    
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

    useEffect(() => {
        if (aboutMe[currentSectionIndex]?.images?.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % aboutMe[currentSectionIndex].images.length
                );
            }, 5000);

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [currentSectionIndex, aboutMe]);

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
                            {about.images && about.images.length > 0 && (
                                <ImageContainer>
                                    {about.images.map((image, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={`${import.meta.env.BASE_URL}${image}`}
                                            alt={`Image ${imgIndex + 1}`}
                                            className={currentImageIndex === imgIndex ? 'active' : imgIndex === 0 ? 'active' : ''}
                                        />
                                    ))}
                                </ImageContainer>
                            )}
                        </div>
                    </section>
                </StyledArticle>
            ))}
            <StyledArticle 
                ref={(el) => (sectionsRef.current[aboutMe.length] = el)}
                className={currentSectionIndex === aboutMe.length ? 'active technical' : 'technical'}
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

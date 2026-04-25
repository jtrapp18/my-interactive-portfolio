import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../data';
import ScrollButtons from '../components/ScrollButtons';
import TechnicalHighlights from '../components/TechnicalHighlights';
import AboutSection from '../components/AboutSection';

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
    overflow-y: auto;
    height: var(--size-body);

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
`;

const TechnicalArticle = styled.article`
    scroll-snap-align: start;
    justify-content: center;
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

const About = () => {
    const aboutMe = data.aboutMe;
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const sectionIndex = sectionsRef.current.findIndex((section) => {
                if (!section) return false;
                const { top, bottom } = section.getBoundingClientRect();
                return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
            });

            if (sectionIndex !== -1 && sectionIndex !== currentSectionIndex) {
                setCurrentSectionIndex(sectionIndex);
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [currentSectionIndex]);

    return (
        <StyledMain ref={containerRef}>
            {aboutMe.map((about, index) => (
                <AboutSection
                    key={about.id}
                    about={about}
                    isActive={currentSectionIndex === index}
                    sectionRef={(el) => (sectionsRef.current[index] = el)}
                />
            ))}
            <TechnicalArticle
                ref={(el) => (sectionsRef.current[aboutMe.length] = el)}
                className={currentSectionIndex === aboutMe.length ? 'active technical' : 'technical'}
            >
                <TechnicalHighlights
                    isActive={currentSectionIndex === aboutMe.length}
                />
            </TechnicalArticle>
            <ScrollButtons
                containerRef={containerRef}
                sectionsRef={sectionsRef}
                currentSectionIndex={currentSectionIndex}
            />
        </StyledMain>
    );
};

export default About;
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';
import { StyledAboutArticle } from '../MiscStyling';


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

const AboutSection = ({ about, isActive, sectionRef }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!isActive) return;
        if (!about.images || about.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % about.images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isActive, about.images]);

    return (
        <StyledAboutArticle
            ref={sectionRef}
            className={isActive ? 'active' : ''}
        >
            <section>
                <AboutTitle
                    title={about.label}
                    subtitle={about.tagline}
                />
                <div className="about-info">
                    <p>
                        {about.details.split('\n').map((line, index, arr) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < arr.length - 1 && <br />}
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
        </StyledAboutArticle>
    );
};

export default AboutSection;
// import React from 'react';
import styled from "styled-components";
import data from "../data";

const StyledMain = styled.main`
    box-sizing: border-box;
    display: grid;
    position: relative;
    justify-content: center;
    align-items: start;
    margin: 0;
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
`

const StyledArticle = styled.article`
    scroll-snap-align: start;
    scroll-margin-top: 80px;
    box-sizing: border-box;
    padding: 20px 100px 100px 100px;
    height: var(--size-body);

    h1 {
        font-size: 75px;
        margin-bottom: 10px;
        animation: slideRight 1s;
        width: fit-content;
    }

    section {
        background: rgba(255, 255, 255, 0.9);
        padding: 0px 20px 20px 20px;
    }

    .about-info {
        display: grid;
        width: 100%;
        max-height: 80%;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        animation: slideLeft 1s;
    }

    img {
        width: 100%;
        max-width: 500px;
    }
    
    p {
        // font-size: 1.5vw;
    }
`

const About = () => {
    const aboutMe = data.aboutMe;

    return (
        <StyledMain>
            {aboutMe.map(about =>
                <StyledArticle key={about.id} image={about.background}>
                    <section>
                        <h1>{about.label}</h1>
                        <div className="about-info">
                            <p>
                                {about.details.split('\n').map((line, index) => (
                                    <>
                                    {line}
                                    {index < about.details.split('\n').length - 1 && <br />}
                                    </>
                                ))}
                            </p>
                            <img
                                src={about.image}
                                alt={about.image}
                            />
                        </div>
                    </section>
                </StyledArticle>
            )}
        </StyledMain>
    );
}

export default About;

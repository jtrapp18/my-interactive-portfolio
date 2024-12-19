// import React from 'react';
import styled from "styled-components";

const StyledMain = styled.main`
    box-sizing: border-box;
    display: grid;
    position: relative;
    justify-content: center;
    align-items: start;
    margin: 0;

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
    background: ${props => props.color ? props.color : null};
    background-image: ${props => props.image ? `url(${props.image})` : null};
    background-size: ${props => props.image ? "80%" : null};
    background-repeat: no-repeat;
    background-position: bottom;

    h1 {
        font-size: 75px;
        margin-bottom: 10px;
        animation: slideRight 1s;
    }

    div {
        display: grid;
        width: 100%;
        max-height: 80%;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        animation: slideLeft 1s;
    }

    img {
        max-width: 100%;
    }
    
    p {
        font-size: 1.5vw;
        padding: 5px;
        background: ${props => props.image ? "white" : null};
        box-shadow: ${props => props.image ? "var(--shadow)" : null};
    }
`

const About = () => {

    return (
        <StyledMain>
            <StyledArticle color="var(--striped-gray)">
                <h1>About Me</h1>
                <div>
                    <img
                        src="/images/kev_and_me.jpg"
                        alt="My boyfriend and me in Scotland"
                    />
                    <p>My name is Jacqueline and I am studying to be a Software Engineer.</p>
                </div>
            </StyledArticle>
            <StyledArticle color="white">
                <h1>My Background</h1>
                <div>
                    <img
                        src="/images/kev_and_me.jpg"
                        alt="My boyfriend and me in Scotland"
                    />
                    <p>
                        I have spent my career as an actuary. I have worked in pension consulting, 
                        life insurance, and currently as an auditor and consultant. During my first job, 
                        I worked a lot in Excel and had to do a lot of repetitive processes. I started 
                        playing around with VBA to try to automate some of my work and pretty much 
                        immediately fell in love with programming. From that point on, I have tried 
                        to incorporate programming into any project at work where I could find a use 
                        for it. Before this bootcamp, that has mainly involved VBA and more recently, 
                        Python.
                    </p>
                </div>
            </StyledArticle>
            <StyledArticle image="/images/tree_line_drawing.png">
                <h1>My Hobbies</h1>
                <div>
                    <span></span>
                    <p>
                        Experienced Actuary and Full-Stack Developer with a background in 
                        pension, life insurance, audit, and consulting.
                        My recent experience spans experience study development using 
                        machine learning techniques, data cleansing, data validation, user
                        interface design, and dashboard development. I have led 
                        initiatives to develop standardized processes for various 
                        actuarial applications and developed user-friendly tools to 
                        streamline client management and daily operations.
                        Currently, I am enhancing my technical skill set through a Software 
                        Engineering bootcamp. My goal is to bridge the gap between actuarial 
                        science and technology by designing innovative, automated solutions 
                        that save time and improve the efficiency of actuarial processes.
                    </p>
                </div>
            </StyledArticle>
        </StyledMain>
    );
}

export default About;

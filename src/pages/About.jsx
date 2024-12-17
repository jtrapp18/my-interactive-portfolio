// import React from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
    width: 30%;
`

const About = () => {
    const languages = ["Python", "React", "JavaScript", "VBA", "CSS", "HTML", "Power BI"]
    
    return (
        <main>
            <h1>About Me</h1>
            <StyledImg
                src="/images/kev_and_me.jpg"
                alt="My boyfriend and me in Scotland"
            />
            <p>My name is Jacqueline and I am studying to be a Software Engineer.</p>
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
            
        </main>
    );
}

export default About;

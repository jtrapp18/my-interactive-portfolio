import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import FooterMain from './FooterMain';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    height: 100vh;
    border-top: 5px solid var(--green);
    z-index: 100;

    #footer-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .7;
        z-index: -1;
    }
`

const StyledDivider = styled.img`
    width: 200px;
    max-width: 90vw;
`

const Footer = () => {

    return (
        <StyledFooter id="footer">
            <img id="footer-background"
                src={`${import.meta.env.BASE_URL}images/footer_background.jpeg`}
                alt="wood pattern"
            />
            <div>
                <StyledDivider 
                    src={`${import.meta.env.BASE_URL}images/dividers/split_leaf_divider.png`} 
                />
            </div>
            <ContactForm />
            <FooterMain />
        </StyledFooter>
    );
}

export default Footer;

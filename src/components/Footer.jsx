import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import FooterMain from './FooterMain';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding-top: 20px;
    height: var(--size-body);
    background: linear-gradient(to bottom, var(--light-green), white);
    background-image: url(${import.meta.env.BASE_URL}images/birch_paneling.jpeg);
    background-size: cover;
`

const StyledDivider = styled.img`
    width: 200px;
`

const Footer = () => {

    return (
        <StyledFooter>
            <div><StyledDivider src={`${import.meta.env.BASE_URL}images/dividers/split_leaf_divider.png`} /></div>
            <ContactForm />
            <FooterMain />
        </StyledFooter>
    );
}

export default Footer;

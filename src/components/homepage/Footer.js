import React from 'react'
import { FooterContainerStyled } from "./Footer.styled"
import logo from "../../assets/logo-sidewalk-white.png"

const Footer = () => {
    return (
        <FooterContainerStyled>
            <a href="https://digiscards.com/sidewalk">
           <p>A product</p>
           <img src={logo} alt="Sidewalk Medias"/>   
           <p>Medias and marketing agency</p>
           </a>
        </FooterContainerStyled>
    )
}

    export default Footer;

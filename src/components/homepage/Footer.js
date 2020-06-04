import React from 'react'
import { FooterContainerStyled } from "./Footer.styled"
import logo from "../../assets/logo-sidewalk-white.png"

const Footer = () => {
    return (
        <FooterContainerStyled>
            <a href="https://digiscards.com/sidewalk">
           <img src={logo} alt="Sidewalk Medias"/>   
           Medias and marketing agency©
           </a>
        </FooterContainerStyled>
    )
}

    export default Footer;

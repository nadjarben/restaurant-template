import React from 'react'
import { NavbarStyled, LogoStyled, LanguageStyled, CheckoutStyled } from './Nabar.styled'

import LocaleSwitcher from './LocaleSwitcher'
import Checkout from "./Checkout";

import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <NavbarStyled>
                <LogoStyled src={logo} alt="logo" width="60px" />
                <CheckoutStyled><Checkout /></CheckoutStyled>
                <LanguageStyled><LocaleSwitcher /></LanguageStyled>
            </NavbarStyled>
        </div>
    )
}

export default Navbar;

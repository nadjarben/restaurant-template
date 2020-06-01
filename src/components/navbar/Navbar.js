import React from 'react'
import { NavbarStyled, LogoStyled, LanguageStyled } from './Nabar.styled'

import LocaleSwitcher from './LocaleSwitcher'

import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <NavbarStyled>
                <LogoStyled src={logo} alt="logo" width="60px" />
                <LanguageStyled><LocaleSwitcher /></LanguageStyled>
            </NavbarStyled>
        </div>
    )
}

export default Navbar;

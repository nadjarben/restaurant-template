import React from 'react'
import { NavbarStyled, LogoStyled, LanguageStyled } from './Nabar.styled'

import LocaleSwitcher from './LocaleSwitcher'

import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div>
            <NavbarStyled>
                <LogoStyled src={logo} alt="logo" width="40px" />
                <LanguageStyled><LocaleSwitcher /></LanguageStyled>
            </NavbarStyled>
        </div>
    )
}

export default Navbar;

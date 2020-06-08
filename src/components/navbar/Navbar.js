import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarStyled,
  LogoStyled,
  LanguageStyled,
  CheckoutStyled,
  TotalStyled,
  DivTools,
} from "./Nabar.styled";

import LanguageSwitcher from "./LanguageSwitcher";
import Checkout from "./Checkout";
import TotalPrice from "../total-price/TotalPrice";
import ModalContact from "./ModalContact";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <NavbarStyled>
        <Link to="/">
        <LogoStyled src={logo} alt="logo" width="40px" />
        </Link>
        <div style={{marginLeft: "15vw", paddingTop: "2vh"}}>
        <ModalContact />
        </div>
        <DivTools>
          <CheckoutStyled>
            <Checkout />
          </CheckoutStyled>
          <LanguageStyled>
            <LanguageSwitcher />
          </LanguageStyled>
          <br />
          <TotalStyled>
            <TotalPrice />
          </TotalStyled>
        </DivTools>
      </NavbarStyled>
    </div>
  );
};

export default Navbar;

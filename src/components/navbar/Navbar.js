import React from "react";
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

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <NavbarStyled>
        <LogoStyled src={logo} alt="logo" width="60px" />
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

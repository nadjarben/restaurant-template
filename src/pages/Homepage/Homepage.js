import React from "react";
import useWebShare from "react-use-web-share";
import BackgroundSlider from "../../components/homepage/BackgroundSlider";
import LanguageSwitcher from "../../components/navbar/LanguageSwitcher";
import Footer from "../../components/homepage/Footer";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

import {
  ForegroundStyled,
  DivButtonsStyled,
  LogoContainerStyled,
  DivExplanation,
} from "./Homepage.styled";

const Homepage = () => {
  const { share } = useWebShare();
  return (
    <>
      <ForegroundStyled>
        <LogoContainerStyled>
          <img src={logo} alt="logo" width="60px" />
        </LogoContainerStyled>
        <div className="language">
          <LanguageSwitcher />
        </div>
        <BackgroundSlider />
      </ForegroundStyled>
      <DivButtonsStyled>
        <DivExplanation>
          Accédez au menu digital et faites votre choix parmis nos delicieux
          plats. Vous avez la possibilité d'ajouter les plats au panier pour les
          présenter au serveur.
        </DivExplanation>
        <div className="buttons">
          <Link to="/menu" style={{ paddingRight: "10px" }}>
            <button>Voir le menu</button>
          </Link>
          <button onClick={() => share()}>Partager</button>
        </div>
      </DivButtonsStyled>
      <Footer />
    </>
  );
};

export default Homepage;

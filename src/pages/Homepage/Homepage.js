import React from "react";
import { useTranslation } from "react-i18next";
import useWebShare from "react-use-web-share";
import BackgroundSlider from "../../components/homepage/BackgroundSlider";
import LanguageSwitcher from "../../components/navbar/LanguageSwitcher";
import Footer from "../../components/homepage/Footer";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

import {
  ForegroundStyled,
  DivButtonsStyled,
} from "./Homepage.styled";

const Homepage = () => {
  const { share } = useWebShare();
  const { t } = useTranslation();

  const shareButton = () => {
    share({
      message: "J'ai mangé dans un super restaurant de pizzas",
    });
  };

  return (
    <>
      <ForegroundStyled>
        <h3 className="title">Pizza Italia</h3>
        <div className="div-logo">
          <img src={logo} alt="logo" width="60px" />
        </div>
        <div className="language">
          <LanguageSwitcher />
        </div>
        <BackgroundSlider />
      </ForegroundStyled>
      <DivButtonsStyled>
      <div className="descri">{t("description")}</div>
        <div className="buttons">
          <Link to="/menu" style={{ paddingRight: "10px" }}>
            <button>{t("menuBtn")}</button>
          </Link>
          <button onClick={shareButton}>{t("share")}</button>
        </div>
      </DivButtonsStyled>
      <Footer />
    </>
  );
};

export default Homepage;

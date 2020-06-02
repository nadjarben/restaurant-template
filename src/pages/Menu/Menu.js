import React from "react";
import { useTranslation } from 'react-i18next'
import { useDispatch } from "react-redux";
import { getLanguage } from "../../redux/actions/app.action";
import Navbar from "../../components/navbar/Navbar";
import CategoryContainer from "../../components/category-container/CategoryContainer";
import CardContainer from "../../components/card-container/CardContainer";


const Menu = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getLanguage(lang))
  }, [lang, dispatch]);

  return (
    <div>
      <Navbar />
      <div style={{ position: "absolute", left: "10px", marginTop: "0px" }}>
        <CardContainer />
      </div>
      <div style={{ position: "fixed", right: "27vw" }}>
        <CategoryContainer />
      </div>
    </div>
  );
};

export default Menu;

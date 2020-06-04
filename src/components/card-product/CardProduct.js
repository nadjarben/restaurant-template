import React from "react";
import { useSelector } from "react-redux";
import { StyledCard } from "./CardProduct.styled";

const CardProduct = ({ p }) => {
  const lang = useSelector((state) => state.app.lang);
  return (
    <StyledCard>
      <img src={p.icon} alt={p.icon} />
      <div>
      <h5>{p["name" + lang]}</h5>
      <p>{p.price.toFixed(2)} €</p>
      </div>
    </StyledCard>
  );
};

export default CardProduct;

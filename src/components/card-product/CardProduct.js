import React from "react";
import { StyledCard } from "./CardProduct.styled";


const CardProduct = ({ p }) => {
  return (
    <StyledCard>
      <img src={p.icon} alt={p.icon} width="80%"  />
      <div>
      <h5>{p.name}</h5>
      <p>{p.price.toFixed(2)} €</p>
      </div>
    </StyledCard>
  );
};

export default CardProduct;

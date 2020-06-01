import React from "react";
import { StyledCard } from "./CardProduct.styled";


const CardProduct = ({title, icon, price}) => {
  return (
    <StyledCard>
      <img src={icon} alt={icon} width="80%"  />
      <div>
      <h5>{title}</h5>
      <p>{price} €</p>
      </div>
    </StyledCard>
  );
};

export default CardProduct;

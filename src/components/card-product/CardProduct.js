import React from "react";
import { StyledCard } from "./CardProduct.styled";


const CategoryCard = ({title, icon}) => {
  return (
    <StyledCard>
      <img src={icon} alt={icon} width="60px" height="50px" />
      <h5>{title}</h5>
    </StyledCard>
  );
};

export default CategoryCard;

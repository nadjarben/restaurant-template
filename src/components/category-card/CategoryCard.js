import React from "react";
import { StyledCard } from "./CategoryCard.styled";

const CategoryCard = ({title, icon}) => {


  return (
    <StyledCard>
      <img src={icon} alt={icon} width="60%" />
      <h5>{title}</h5>
    </StyledCard>
  );
};

export default CategoryCard;

import React from "react";
import { StyledCard } from "./CategoryCard.styled";

const CategoryCard = ({title, icon}) => {


  return (
    <StyledCard>
      <img src={icon} alt={icon} width="70%" />
      <div className="test">
      <h5>{title}</h5>
      </div>
    </StyledCard>
  );
};

export default CategoryCard;

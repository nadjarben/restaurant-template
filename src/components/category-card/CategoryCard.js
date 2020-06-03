import React from "react";
import { useSelector } from "react-redux";

import { StyledCard } from "./CategoryCard.styled";

const CategoryCard = ({ c }) => {
  const lang = useSelector((state) => state.app.lang);
  const category = useSelector((state) => state.category.category.category);
  const styledCardContent = () => {
    return (
      <>
        {c.icon && <img src={c.icon} alt={c.icon} width="70%" />}
        <div>
          <h5>{c["name" + lang]}</h5>
        </div>
      </>
    );
  };

  return (
    <div>
      {category === c.category ? (
        <StyledCard reverted>{styledCardContent()}</StyledCard>
      ) : (
        <StyledCard>{styledCardContent()}</StyledCard>
      )}
    </div>
  );
};

export default CategoryCard;

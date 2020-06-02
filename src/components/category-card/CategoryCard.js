import React from "react";
import { useSelector } from "react-redux";

import { StyledCard } from "./CategoryCard.styled";

const CategoryCard = ({ c }) => {
  const lang = useSelector((state) => state.app.lang);

  return (
    <StyledCard>
      {c.icon && <img src={c.icon} alt={c.icon} width="70%" />}
      <div>
        {lang === "en" && <h5>{c.nameen}</h5> }
        {lang === "fr" && <h5>{c.namefr}</h5> }
      </div>
    </StyledCard>
  );
};

export default CategoryCard;

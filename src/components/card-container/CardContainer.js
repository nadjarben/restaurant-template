import React from "react";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";
import CardProduct from "../card-product/CardProduct";

import datas from "../../data.json";

const CardContainer = ({ category }) => {
  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {datas
          .filter((data) => data.cat.includes(category))
          .map((d) => (
            <div>
              <CardProduct
                title={d.name}
                icon={`http://localhost:3000/${d.icon}`}
              />
            </div>
          ))}
      </StyledDiv>
    </div>
  );
};

export default CardContainer;

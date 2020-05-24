import React from "react";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";

import ModalProduct from "../modal-product/ModalProduct";

import datas from "../../data.json";

const CardContainer = ({ category }) => {
  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {datas
          .filter((data) => data.cat.includes(category))
          .map((d, id) => (
            <ModalProduct
              key={id}
              name={d.name}
              icon={d.icon}
              description={d.description}
              ingredients={d.ingredients}
            />
          ))}
      </StyledDiv>
    </div>
  );
};

export default CardContainer;

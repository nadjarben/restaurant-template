import React from "react";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";

import ModalProduct from "../modal-product/ModalProduct";

import datas from "../../data.json";

const CardContainer = ({ category, checkout, setCheckout }) => {
  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {category !== "Panier" ? datas
          .filter((data) => data.cat.includes(category))
          .map((d, id) => (
            <ModalProduct
              key={id}
              d={d}
              checkout={checkout}
              setCheckout={setCheckout}
            />
          )) : checkout.map((d, id) => (
            <ModalProduct
              key={id}
              d={d}
              checkout={checkout}
              setCheckout={setCheckout}
            />
          ))}
      </StyledDiv>
      <br />
    </div>
  );
};

export default CardContainer;

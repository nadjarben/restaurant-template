import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";

import ModalProduct from "../modal-product/ModalProduct";
import ModalQuantity from "../modal-quantity/ModalQuantity";

const CardContainer = () => {
  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  

  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {category !== "Commande"
          ? products
              .filter((data) => data.cat.includes(category))
              .map((p, id) => (
                <ModalProduct
                  key={id}
                  p={p}
                />
              ))
          : 
          cartItems.map((ci, id) => (
              <div key={id}>
                <ModalQuantity
                  ci={ci}
                />
              </div>
            ))}
      </StyledDiv>
      <br />
    </div>
  );
};

export default CardContainer;

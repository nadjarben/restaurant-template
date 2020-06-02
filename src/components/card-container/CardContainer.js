import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";

import ModalProduct from "../modal-product/ModalProduct";
import CardProductInTotal from "../card-product/CardProductInTotal";

const CardContainer = ({ setCheckout }) => {
  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = () => {
    let total = 0;
    cartItems.map((c, i) => (total = total + c.price));
    return total;
  };

  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {category !== "Checkout"
          ? products
              .filter((data) => data.cat.includes(category))
              .map((d, id) => (
                <ModalProduct
                  key={id}
                  d={d}
                  checkout={cartItems}
                  setCheckout={setCheckout}
                />
              ))
          : cartItems.map((d, id) => (
              <div key={id}>
                <CardProductInTotal
                  d={d}
                  title={d.name}
                  icon={d.icon}
                  price={d.price}
                  checkout={cartItems}
                  setCheckout={setCheckout}
                />
              </div>
            ))}
      </StyledDiv>
      <br />
    </div>
  );
};

export default CardContainer;

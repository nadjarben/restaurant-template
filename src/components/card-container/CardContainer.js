import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";

import ModalProduct from "../modal-product/ModalProduct";
import ModalQuantity from "../modal-quantity/ModalQuantity";

const CardContainer = ({ setCheckout }) => {
  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

    let total = 0;
    cartItems.map((c, i) => (
      total = total + (c.price * c.quantity)
    ));
    console.log(total.toFixed(2))
  

  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <p style={{fontWeight: "bold"}}>Prix total : {total.toFixed(2)} €</p>
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
          : 
          cartItems.map((d, id) => (
              <div key={id}>
                <ModalQuantity
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

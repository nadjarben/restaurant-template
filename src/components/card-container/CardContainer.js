import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";

import ModalProduct from "../modal-product/ModalProduct";
import CardProductInTotal from "../card-product/CardProductInTotal";


const CardContainer = ({ checkout, setCheckout }) => {
  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.products);
  const totalPrice = () => {
    let total = 0;
    checkout.map((c, i) => (total = total + c.price));
    return total;
  };

  totalPrice();
  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {category !== "Panier"
          ? products
              .filter((data) => data.cat.includes(category))
              .map((d, id) => (
                <ModalProduct
                  key={id}
                  d={d}
                  checkout={checkout}
                  setCheckout={setCheckout}
                />
              ))
          : checkout.map((d, id) => (
              <div key={id}>
                <CardProductInTotal
                  d={d}
                  title={d.name}
                  icon={d.icon}
                  price={d.price}
                  checkout={checkout}
                  setCheckout={setCheckout}
                />
              </div>
            ))}
        <br />
        {category === "Panier" && (
          <div style={{ marginLeft: "2vh" }}>
            <h5 style={{ position: "absolute", bottom: "5px", left: "5px" }}>
              Total: {totalPrice()}€
            </h5>
            <br />
          </div>
        )}
      </StyledDiv>
      <br />
    </div>
  );
};

export default CardContainer;

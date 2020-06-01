import React from "react";
import { StyledCard } from "./CardProduct.styled";


const CardProductInTotal = ({title, icon, price, checkout, d, setCheckout}) => {


    let newList;
    const removeProduct = (index) => {
        checkout.splice(checkout.indexOf(3), 1)
        console.log(checkout)
      }

      console.log(newList)

  return (
    <StyledCard onClick={removeProduct}>
      <img src={icon} alt={icon} width="60px" height="50px" />
      <div>
      <h5>{title}</h5>
      <p>{price}€</p>
      </div>
    </StyledCard>
  );
};

export default CardProductInTotal;

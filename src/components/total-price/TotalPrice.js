import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let total = 0;
  cartItems.map((c, i) => (total = total + c.price * c.quantity));

  return (
    <div>
      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
        Total : {total.toFixed(2)} €
      </p>
    </div>
  );
};

export default TotalPrice;

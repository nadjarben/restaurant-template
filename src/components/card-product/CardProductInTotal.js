import React from "react";
import { StyledCard } from "./CardProduct.styled";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#DA291C",
    color: "white",
  },
}))(Badge);


const CardProductInTotal = ({title, icon, price, checkout, d, setCheckout}) => {
  


    let newList;
    const removeProduct = (index) => {
        checkout.splice(checkout.indexOf(3), 1)
        console.log(checkout)
      }

      console.log(newList)

  return (
    <StyledCard onClick={removeProduct}>
      <img src={icon} alt={icon} width="80%" />
      <div>
      <h5>{title}</h5>
      <div style={{display: 'flex'}}>
      <p>{price}€</p>
      <StyledBadge badgeContent={d.quantity}></StyledBadge>
      </div>
      <br />
      </div>
    </StyledCard>
  );
};

export default CardProductInTotal;

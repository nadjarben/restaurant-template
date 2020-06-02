import React from "react";
import { StyledCard } from "./CardProduct.styled";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";


const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#DA291C",
    color: "white",
  },
}))(Badge);


const CardProductInTotal = ({title, icon, price, checkout, d, setCheckout}) => {
  
  return (
    <StyledCard>
      <img src={icon} alt={icon} width="80%" />
      <div>
      <h5>{title}</h5>
      <p>{price}€</p>
      <div style={{position: "absolute", bottom: 0}}>
      <StyledBadge badgeContent={d.quantity}></StyledBadge>
      </div>
      </div>
    </StyledCard>
  );
};

export default CardProductInTotal;

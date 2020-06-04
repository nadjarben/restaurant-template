import React from "react";
import { useSelector } from "react-redux";
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


const CardProductInTotal = ({ci}) => {
  const lang = useSelector((state) => state.app.lang);
  return (
    <StyledCard>
      <img src={ci.icon} alt={ci.icon} width="80%" />
      <div>
      <h5>{ci["name" + lang]}</h5>
      <p>{ci.price}€</p>
      <div style={{position: "absolute", bottom: 0}}>
      <StyledBadge badgeContent={ci.quantity}></StyledBadge>
      </div>
      </div>
    </StyledCard>
  );
};

export default CardProductInTotal;

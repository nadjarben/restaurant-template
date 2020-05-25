import React from "react";
import { StyledCard } from "./CardTotal.styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CategoryCard = ({ title, icon }) => {
  return (
    <StyledCard>
      <IconButton style={{marginLeft: 'auto'}} edge="start" color="inherit" aria-label="close">
        <ShoppingCartIcon style={{color: '#FFC72C'}} fontSize="large" />
      </IconButton>

      <h5>Panier</h5>
    </StyledCard>
  );
};

export default CategoryCard;

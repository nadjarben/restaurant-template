import React from "react";
import { StyledCard } from "./CardTotal.styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CategoryCard = ({ setCategory }) => {
  return (
    <StyledCard onClick={() => setCategory("Panier")}>
      <IconButton style={{marginLeft: 'auto'}} edge="start" color="inherit" aria-label="close">
        <ShoppingCartIcon style={{color: '#DA291C'}} fontSize="large" />
      </IconButton>

      <h5>Panier</h5>
    </StyledCard>
  );
};

export default CategoryCard;

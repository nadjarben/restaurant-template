import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/actions/category.action";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  let totalQuantity = 0;
  cartItems.map((c) => (totalQuantity = c.quantity + totalQuantity));

  return (
    <div
      onClick={() =>
        dispatch(
          changeCategory({
              id: "1",
              category: "Commande",
              namefr: "Commande",
              nameen: "Order",
              icon: "popular.png",
              active: true,
          })
        )
      }
    >
      <IconButton edge="start" color="inherit" aria-label="close">
        <StyledBadge badgeContent={totalQuantity}></StyledBadge>
        <ShoppingCartIcon style={{ color: "#DA291C", fontSize: "30px" }} />
      </IconButton>
    </div>
  );
};

export default Checkout;

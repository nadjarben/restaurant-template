import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearItemFromCart, addItem } from "../../redux/actions/cart.action";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Divider from "@material-ui/core/Divider";
import { TitleStyled, ImgStyled } from "./ModalQuantity.styled"

import CartProductInTotal from "../card-product/CardProductInTotal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalContact({ci}) {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.app.lang);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeFromCart = () => {
    dispatch(clearItemFromCart(ci));
    handleClose();
  };

  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  } else {
    url = "https://menu-pizzaitalia.netlify.app";
  }

  return (
    <div>
      <div onClick={handleClickOpen}>
        <CartProductInTotal
          ci={ci}
        />
      </div>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
        BackdropProps={{
          style: {
            backgroundColor: "#DA291C",
            opacity: "0.2",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "cent",
            backgroundColor: "#DA291C",
            color: "white",
          }}
        >
          <div style={{ position: "absolute", left: "15px", top: "7px" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <DialogTitle id="form-dialog-title"><TitleStyled>{ci["name" + lang]}</TitleStyled></DialogTitle>
        </div>
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImgStyled
              src={`${url}/${ci.icon}`}
              alt={ci.name}
              width="280px"
              height="200px"
            />
          </div>

          <Divider style={{ marginTop: "5vh", marginBottom: "5vh" }} />

          <div style={{ paddingBottom: "20px", paddingLeft: "-1.5vw" }}>
            <div
              style={{
                marginTop: "2vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                {ci.quantity === 1 ? (
                  <div style={{ display: "flex" }}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="close"
                      onClick={removeFromCart}
                    >
                      <HighlightOffIcon
                        style={{ color: "#DA291C", fontSize: "35px" }}
                      />
                    </IconButton>
                    <div style={{fontStyle:"bold", marginTop: "20px", paddingRight: "14px", fontWeight: "bold"}}>{ci.quantity} x</div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="close"
                        onClick={() => dispatch(addItem(ci))}
                      >
                        <AddCircleOutlineIcon
                          style={{ color: "#DA291C", fontSize: "35px" }}
                        />
                      </IconButton>
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="close"
                      onClick={() => dispatch(removeItem(ci))}
                    >
                      <RemoveCircleOutlineIcon
                        style={{ color: "#DA291C", fontSize: "35px" }}
                      />
                    </IconButton>
                    <div style={{fontStyle:"bold", marginTop: "20px", paddingRight: "14px", fontWeight: "bold"}}>{ci.quantity} x</div>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="close"
                        onClick={() => dispatch(addItem(ci))}
                      >
                        <AddCircleOutlineIcon
                          style={{ color: "#DA291C", fontSize: "35px" }}
                        />
                      </IconButton>
                  </div>
                )}
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalContact;

//<Divider style={{ marginTop: "3vh", marginBottom: "1vh" }} />
//<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}>
//<IconButton
// edge="start"
// color="inherit"
// onClick={addProductToCart}
// aria-label="close"
//>
//  <AddCircleOutlineIcon fontSize="large" />
//</IconButton>
//</div>

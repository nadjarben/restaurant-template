import React from "react";
import { DOMAIN } from "../../utils/environment"
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions/cart.action";
import { TitleStyled, ImgStyled } from "./ModalProduct.styled"

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Divider from "@material-ui/core/Divider";

import CardProduct from "../card-product/CardProduct";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalContact({ p }) {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.app.lang);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addProduct = () => {
    dispatch(addItem(p));
    handleClose();
  };

  console.log(DOMAIN)

  return (
    <>
      <div onClick={handleClickOpen}>
        <CardProduct
        p={p}
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
          <div style={{ position: "absolute", left: "15px", top: "3px" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <DialogTitle id="form-dialog-title"><TitleStyled>{p["name" + lang]}</TitleStyled></DialogTitle>
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
              className="modal-img"
              src={`${DOMAIN}/${p.icon}`}
              alt={p.name}
            />
          </div>

          <Divider style={{ marginTop: "0vh", marginBottom: "2vh" }} />

          <div style={{ paddingBottom: "20px", paddingLeft: "-1.5vw" }}>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              {p["description" + lang]}
            </div>
            <br />
            <Divider variant="middle" />
            <div
              style={{
                marginTop: "2vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              <span>{p.price.toFixed(2)} €</span>
              <div style={{ marginLeft: "10px" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={addProduct}
                  aria-label="close"
                >
                  <AddCircleOutlineIcon
                    style={{ color: "#DA291C", fontSize: "35px" }}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
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

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from '@material-ui/core/Divider';

import CardProduct from "../card-product/CardProduct";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalContact(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  } else {
    url = "https://amazing-poincare-3f19ef.netlify.app";
  }

  return (
    <div>
      <div onClick={handleClickOpen}>
        <CardProduct title={props.name} icon={`${url}/${props.icon}`} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
        BackdropProps={{
          style: {
            backgroundColor: "red",
            opacity: "0.2",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "cent",
            backgroundColor: 'red',
            color: 'yellow'
          }}
        >
          <div style={{ position: "absolute", left: "7px", top: "7px" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <DialogTitle id="form-dialog-title">{props.name}</DialogTitle>
        </div>
        <br />
        <DialogContent>
          <img
            src={`${url}/${props.icon}`}
            alt={props.name}
            width="300px"
            height="200px"
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Divider />
          <br />

          <div style={{paddingBottom: '20px'}}>
            <div style={{display: 'flex'}}>
              <span style={{ fontWeight: "bold" }}>Description:</span>
              <span style={{paddingLeft: '8px'}}>{props.description}</span>
            </div>
            <br />
            {props.ingredients && (
              <div style={{display: 'flex'}}>
                <span style={{ fontWeight: "bold" }}>Ingredient:</span>
                <span style={{paddingLeft: '8px'}}>{props.ingredients}</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalContact;

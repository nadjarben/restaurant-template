import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import ContactMailIcon from "@material-ui/icons/ContactMail";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalContact() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForm({
      ...form,
      sent: false,
      error: false,
      success: false,
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const isFulfil = () => {
    if (form.name !== "" && form.email !== "") {
      setIsEmpty(false);
      console.log(isEmpty);
    }
  };

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value, error: false, success: false });
    isFulfil();
  };

  const submitForm = (e) => {
    console.log(form);
  };

  return (
    <div>
      <IconButton
        style={{ marginLeft: "auto" }}
        edge="start"
        color="inherit"
        aria-label="close"
        onClick={handleClickOpen}
      >
        <ContactMailIcon style={{ color: "#DA291C" }} fontSize="large" />
      </IconButton>{" "}
      <Dialog
        open={open}
        fullScreen={fullScreen}
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
        <div style={{ opacity: "none" }}>
          <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
          <DialogContent>
            <div>
              <TextField
                margin="dense"
                label="Name"
                type="name"
                name="name"
                fullWidth
                required
                onChange={handleChange("name")}
              />
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                required
                onChange={handleChange("email")}
              />
              <TextField
                margin="dense"
                id="phone"
                label="Phone"
                type="phone"
                fullWidth
                onChange={handleChange("phone")}
              />
              <TextField
                margin="dense"
                id="message"
                label="Message"
                multiline
                rows="4"
                type="text"
                fullWidth
                onChange={handleChange("message")}
              />
              <DialogActions style={{marginTop: "5vh"}}>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
                <Button
                  disabled={isEmpty}
                  variant="contained"
                  onClick={submitForm}
                  color="primary"
                >
                  Send
                </Button>
              </DialogActions>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default ModalContact;

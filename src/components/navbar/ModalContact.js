import React from "react";
import { API } from "../../utils/environment";
import { useSelector, useDispatch } from "react-redux";
import { toggleContact, toggleContactClose } from "../../redux/actions/app.action"
import axios from "axios";
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
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.app.modalContact);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [form, setForm] = React.useState({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });

  const handleClickOpen = () => {
    dispatch(toggleContact())
  };

  const handleClose = () => {
    dispatch(toggleContactClose())
  };

  const isFulfil = () => {
    if (form.name !== "" && form.mail !== "" && form.message !== "") {
      setIsEmpty(false);
    }
  };

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
    isFulfil();
  };

  const submitForm = (e) => {
    const { name, phone, mail, message } = form;
    axios
      .post(`${API}/sendEmail`, { name, phone, mail, message })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      setTimeout(() => {
        handleClose()
      }, 2000);
  };

  return (
    <div>
      <IconButton
      style={{marginLeft: "20px"}}
        edge="start"
        color="inherit"
        aria-label="close"
        onClick={handleClickOpen}
      >
        <ContactMailIcon style={{ color: "#DA291C", opacity: 0.3 }} fontSize="large" />
      </IconButton>{" "}
      <Dialog
        open={toggle}
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
          <DialogTitle id="form-dialog-title">Are you interested ?</DialogTitle>
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
                id="mail"
                label="Email"
                type="email"
                fullWidth
                required
                onChange={handleChange("mail")}
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
              <DialogActions style={{ marginTop: "5vh" }}>
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

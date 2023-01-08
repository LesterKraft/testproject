import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import styles from "/styles/Home.module.scss";
import firebaseEmailPasswordAuth from "../../services/auth/firebaseEmailPasswordAuth";
import { useState } from "react";
import googleAuth from "../../services/auth/googleAuth";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1.6 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function LoginButton(props) {
  const [status, setStatus] = useState("Please Login");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setStatus("Please Login");
    setError(false);
    setOpen(false);
  };
  const [error, setError] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  function formSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebaseEmailPasswordAuth(email, password)
      .then((res) => {
        console.log(res);
        // props.signedUser(res)
        console.log("user successfully signed in");
        setIsSignedIn(true);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("erorr");
        setStatus("incorrect email or password");
        setError(true);
      });
  }

  return (
    <>
      <Button
        color="black"
        size="large"
        variant="contained"
        onClick={handleClickOpen}
        className={styles.loginButton}
      >
        LOGIN
      </Button>
      {!isSignedIn ? (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            className={error ? styles.dialogError : styles.dialogTitle}
            id="title"
            onClose={handleClose}
          >
            {status}
          </BootstrapDialogTitle>
          <form className={styles.dialog} onSubmit={(e) => formSubmit(e)}>
            <TextField
              className={styles.dialogInput}
              id="email"
              label="Email"
              type="text"
              autoComplete="current-login"
            />
            <TextField
              className={styles.dialogInput}
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              className={styles.dialogButton}
              type="submit"
              value="submit"
              size="large"
              variant="contained"
            >
              LOG IN
            </Button>
            <Button
              className={styles.dialogButton}
              size="large"
              variant="contained"
              color="black"
              onClick={() => {
                googleAuth()
                  .then((user) => {
                    console.log(user);
                    handleClose();
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            >
              Google Authorization
            </Button>
          </form>
        </BootstrapDialog>
      ) : null}
    </>
  );
}

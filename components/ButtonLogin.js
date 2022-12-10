import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import styles from "/styles/Home.module.scss";
import firebaseEmailPasswordAuth from "../auth/firebaseEmailPasswordAuth";
import { useState } from "react";

const theme = createTheme({
  palette: {
    black: {
      main: "#2a2a2b",
      contrastText: "#fff",
    },
  },
});

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
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
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

export default function ButtonLogin() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  function formSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebaseEmailPasswordAuth(email, password)
      .then((res) => {
        console.log(res);
        console.log("user successfully signed in");
        setIsSignedIn(true);
      })
      .catch((err) => {
        // createEmailPasswordAccount(email, password)
        //   .then((res) => console.log(res))
        //   .catch((err) => console.error(err));
      });
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          color="black"
          size="large"
          variant="contained"
          onClick={handleClickOpen}
        >
          LOGIN
        </Button>
      </ThemeProvider>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Sign in to continue.
        </BootstrapDialogTitle>{" "}
        <Divider />
        {!isSignedIn ? (
          <form className={styles.dialog} onSubmit={(e) => formSubmit(e)}>
            <TextField
              className={styles.dialogInput}
              id="email"
              label="Email"
              type="email"
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
              LOGIN
            </Button>
          </form>
        ) : (
          <h1>Hello user!</h1>
        )}
      </BootstrapDialog>
    </div>
  );
}

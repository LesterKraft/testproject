import styles from "/styles/Home.module.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const theme = createTheme({
  palette: {
    red: {
      main: "#c8000d",
      contrastText: "#fff",
    },
  },
});

export function LoginItems({ avatar, name, profession }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function formSubmit(e) {
    e.preventDefault();
    // const question = {
    //   title: document.getElementById("title").value,
    //   description: document.getElementById("description").value,
    //   tags: document.getElementById("tags").value.split(","),
    // };
    const db = getFirestore();
    await setDoc(doc(db, "question", document.getElementById("title").value), {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      tags: document.getElementById("tags").value.split(","),
    });
  }

  return (
    <div className={styles.loginItems}>
      <img className={styles.loginItemsAva} src={avatar} alt="avatar" />
      <div className={styles.loginItemsName}>{name}</div>
      <div className={styles.loginItemsProfession}>{profession}</div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClickOpen}
          className={styles.loginItemsButton}
          color="red"
          size="large"
          variant="contained"
          startIcon={<AddIcon />}
        >
          CREATE
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={(e) => formSubmit(e)}>
            <DialogTitle>New Question</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="normal"
                id="title"
                label="title"
                type="title"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="normal"
                id="description"
                label="description"
                type="description"
                fullWidth
                multiline
                rows={4}
                variant="standard"
              />
              <TextField
                autoFocus
                margin="normal"
                id="tags"
                label="tags"
                type="tags"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={handleClose}
                type="submit"
                value="submit"
                color="red"
              >
                Create
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
LoginItems.defaultProps = {
  avatar: "/menu/ava.png",
  name: "Mr Usman Jaffer",
  profession: "Vascular Surgeon",
};

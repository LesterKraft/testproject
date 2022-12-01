import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    red: {
      main: "#c8000d",
      contrastText: "#fff",
    },
  },
});

export function MenuItems({ name, icon = "/menu/" + name + ".svg" }) {
  return (
    <>
      <MenuItem className={styles.menuItem}>
        <img className={styles.menuItemIcon} src={icon} alt={name} />
        <div className={styles.menuItemText}>{name}</div>
      </MenuItem>
    </>
  );
}

export function LoginItems({ avatar, name, profession }) {
  return (
    <div className={styles.loginItems}>
      <img className={styles.loginItemsAva} src={avatar} alt="avatar" />
      <div className={styles.loginItemsName}>{name}</div>
      <div className={styles.loginItemsProfession}>{profession}</div>
      <ThemeProvider theme={theme}>
        <Button
          className={styles.loginItemsButton}
          color="red"
          size="large"
          variant="contained"
          startIcon={<AddIcon />}
        >
          CREATE
        </Button>
      </ThemeProvider>
    </div>
  );
}
LoginItems.defaultProps = {
  avatar: "/menu/ava.png",
  name: "Mr Usman Jaffer",
  profession: "Vascular Surgeon",
};

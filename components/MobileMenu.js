import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginItems } from "./LoginItems";
import styles from "/styles/Home.module.scss";
import MenuList, { MenuListAuthOff } from "./MenuList.js";
import { useState } from "react";
import { getAuth } from "firebase/auth";

const drawerWidth = 235;

const themeIcon = createTheme({
  palette: {
    white: {
      main: "#ffffff",
      contrastText: "#fff",
    },
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MobileMenu() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  // auth.onAuthStateChanged((res) => {
  //   setCurrentUser(res);
  // });

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={themeIcon}>
        {!open ? (
          <IconButton
            aria-label="open drawer"
            onClick={!open ? handleDrawerOpen : handleDrawerClose}
            // onClick={handleDrawerClose}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            className={styles.iconMenu}
            color="white"
            size="large"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="open drawer"
            onClick={!open ? handleDrawerOpen : handleDrawerClose}
            // onClick={handleDrawerClose}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            className={styles.iconMenu}
            color="white"
            size="large"
          >
            <CloseIcon />
          </IconButton>
        )}
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {!currentUser ? (
            <>
              <MenuListAuthOff />
            </>
          ) : (
            <>
              <LoginItems />
              <MenuList />
            </>
          )}
        </Drawer>
      </ThemeProvider>
    </>
  );
}

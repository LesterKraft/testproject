import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { LoginItems } from "./LoginItems";
import styles from "/styles/Home.module.scss";
import MenuItems, { MenuListAuthOff } from "./MenuItems.js";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

const drawerWidth = 235;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MobileMenu(props) {
  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (props.user) {
      setCurrentUser(props.user);
    } else {
      setCurrentUser(null);
    }
  }, [props]);

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
      {!open ? (
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 0 }}
          className={styles.iconMenu}
          color="white"
          size="large"
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerClose}
          // onClick={handleDrawerClose}
          edge="start"
          sx={{ mr: 0 }}
          className={styles.iconMenu}
          color="white"
          size="large"
        >
          <CloseIcon />
        </IconButton>
      )}
      {!currentUser ? (
        <div className={styles.drawerMenu}>
          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                // width: drawerWidth,

                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <MenuListAuthOff />
          </Drawer>
        </div>
      ) : (
        <div className={styles.drawerMenu}>
          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                // width: drawerWidth,

                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <LoginItems />
            <MenuItems />
          </Drawer>
        </div>
      )}
    </>
  );
}

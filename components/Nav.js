import styles from "/styles/Home.module.scss";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ButtonLogin from "./ButtonLogin";
import ButtonSignUp from "./ButtonSignUp";
import Stack from "@mui/material/Stack";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
      contrastText: "#fff",
    },
  },
});

export default function HeaderBar() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  auth.onAuthStateChanged((res) => {
    setCurrentUser(res);
  });

  return (
    <>
      <header className={styles.header}>
        <div>
          <ThemeProvider theme={theme}>
            <IconButton
              className={styles.headerMenu}
              edge="start"
              color="white"
              aria-label="menu"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </ThemeProvider>
          <Link href="/" className={styles.headerLogo}>
            Health Shared
          </Link>
          <form className={styles.headerSearch}>
            <input
              className={styles.headerSearchInput}
              type="text"
              placeholder="Search"
            />
            <button className={styles.headerSearchButton} type="submit">
              <img src="../header/search.svg" alt="Кнопка «search»" />
            </button>
          </form>
        </div>
        <div>
          {!currentUser ? (
            <Stack spacing={2} direction="row">
              <ButtonLogin />
              <ButtonSignUp />
            </Stack>
          ) : (
            <>
              <IconButton>
                <img src="/header/help.svg" alt="help" />
              </IconButton>
              <IconButton className={styles.headerNotification}>
                <img src="/header/notifications.svg" alt="notifications" />
              </IconButton>
            </>
          )}
        </div>
      </header>
    </>
  );
}

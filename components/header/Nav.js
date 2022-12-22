import styles from "/styles/Home.module.scss";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ButtonLogin from "./ButtonLogin";
import ButtonSignUp from "./ButtonSignUp";
import Stack from "@mui/material/Stack";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MobileMenu from "../menu/MobileMenu";
import SearchIcon from "@mui/icons-material/Search";

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
          <MobileMenu user={currentUser} />

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
              <ThemeProvider theme={theme}>
                <IconButton
                  className={styles.mobileSearch}
                  color="white"
                  size="small"
                >
                  <SearchIcon />
                </IconButton>
              </ThemeProvider>
              <ButtonLogin />
              <ButtonSignUp />
            </Stack>
          ) : (
            <>
              <ThemeProvider theme={theme}>
                <IconButton
                  className={styles.mobileSearch}
                  color="white"
                  size="small"
                >
                  <SearchIcon />
                </IconButton>
              </ThemeProvider>
              <IconButton>
                <img
                  className={styles.headerQuestion}
                  src="/header/help.svg"
                  alt="help"
                />
              </IconButton>
              <IconButton className={styles.headerNotification}>
                <img
                  className={styles.headerNotificationIcon}
                  src="/header/notifications.svg"
                  alt="notifications"
                />
              </IconButton>
            </>
          )}
        </div>
      </header>
    </>
  );
}

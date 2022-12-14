import styles from "/styles/Home.module.scss";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import LoginButton from "./LoginButton";
import ButtonSignUp from "./SignUpButton";
import Stack from "@mui/material/Stack";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import MobileMenu from "../menu/MobileMenu";
import SearchIcon from "@mui/icons-material/Search";

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

        <div className={styles.wrapperButtons}>
          {!currentUser ? (
            <Stack spacing={1} direction="row">
              <IconButton
                className={styles.mobileSearch}
                color="white"
                size="small"
              >
                <SearchIcon />
              </IconButton>
              <LoginButton />
              <ButtonSignUp />
            </Stack>
          ) : (
            <>
              <IconButton
                className={styles.mobileSearch}
                color="white"
                size="small"
              >
                <SearchIcon />
              </IconButton>
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

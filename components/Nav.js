import styles from "/styles/Home.module.scss";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ButtonLogin from "./ButtonLogin";
import ButtonSignUp from "./ButtonSignUp";
import Stack from "@mui/material/Stack";
import {getAuth, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";

export default function HeaderBar() {
  const [currentUser, setCurrentUser] = useState(null)
  const auth = getAuth()
  auth.onAuthStateChanged((res) => {
    setCurrentUser(res)
  })

  function signedUser(res) {
    setCurrentUser(res.user)
  }
  const logOut = () => {
    signOut(getAuth()).then(() => {
      console.log('sign out')
    })
        .catch(err=>console.error(err))
  }
  return (
    <>
      <header className={styles.header}>
        <div>
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
          {/* <IconButton>
            <img src="/header/help.svg" alt="help" />
          </IconButton>
          <IconButton className={styles.headerNotification}>
            <img src="/header/notifications.svg" alt="notifications" />
          </IconButton> */}
          {(!currentUser) ?
              <Stack spacing={2} direction="row">
                <ButtonLogin signedUser={signedUser}/>
                <ButtonSignUp/>
              </Stack> :
              <Button onClick={logOut}>SignOut</Button>
          }
        </div>
      </header>
    </>
  );
}

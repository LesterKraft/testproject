import { LoginItems } from "./LoginItems";
import styles from "/styles/Home.module.scss";
import MenuItems, { MenuListAuthOff } from "./MenuItems.js";
import { useState } from "react";
import { getAuth } from "firebase/auth";

export default function DisplayMenu() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  auth.onAuthStateChanged((res) => {
    setCurrentUser(res);
  });

  return (
    <nav className={styles.dMenu}>
      {!currentUser ? (
        <>
          <MenuListAuthOff />
        </>
      ) : (
        <>
          <LoginItems />
          <MenuItems />
        </>
      )}
    </nav>
  );
}

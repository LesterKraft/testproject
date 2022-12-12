import menulist from "../data/menuList";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

export default function MenuList() {
  // const firebaseApp = initializeApp({
  //   apiKey: "AIzaSyCZ3_ouqAJRfOTYMwfnZDwFMCOmupI3KOY",
  //   authDomain: "testproject-5f593.firebaseapp.com",
  //   projectId: "testproject-5f593",
  //   storageBucket: "testproject-5f593.appspot.com",
  //   messagingSenderId: "985598119305",
  //   appId: "1:985598119305:web:53e0a5c651066df80c6558",
  //   measurementId: "G-3W4PYX48WX",
  // });

  // const auth = getAuth(firebaseApp);
  // console.log(auth);
  const logout = () => {
    console.log("click");
    //   signOut(auth)
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
  };
  return menulist.map((list) => (
    <div key={menulist.indexOf(list)}>
      {list.divider && <Divider />}
      <MenuItem
        onClick={list.log ? logout : null}
        component={Link}
        className={styles.menuItem}
        href={list.url}
      >
        <img
          className={list.nested ? styles.menuPadding : null}
          src={list.icon}
          alt={list.name}
        />
        <div className={styles.menuItemText}>{list.name}</div>
      </MenuItem>
    </div>
  ));
}

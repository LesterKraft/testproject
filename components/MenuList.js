import menulist from "../data/menuList";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";

export default function MenuList() {
  const logOut = () => {
    signOut(getAuth())
      .then(() => {
        console.log("sign out");
      })
      .catch((err) => console.error(err));
  };

  return menulist.map((list) => (
    <div key={menulist.indexOf(list)}>
      {list.divider && <Divider />}
      <MenuItem
        onClick={list.log ? logOut : null}
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

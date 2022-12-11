import menulist from "../data/menuList";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
// import { signOut } from "firebase/auth";

export default function MenuList() {
  // const logout = async () => {
  //   await signOut(auth);
  // };
  return menulist.map((list) => (
    <div key={menulist.indexOf(list)}>
      {list.divider && <Divider />}
      <MenuItem
        // component={list.log ? logout : null}
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

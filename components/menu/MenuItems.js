import menuItems from "../../data/menuItems";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";

export default function MenuItems() {
  const logOut = () => {
    signOut(getAuth())
      .then(() => {
        console.log("sign out");
      })
      .catch((err) => console.error(err));
  };

  return menuItems.map((list) => (
    <div key={menuItems.indexOf(list)}>
      {list.divider ? <Divider /> : <></>}
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

export function MenuListAuthOff() {
  return menuItems.map((lis) => (
    <div key={menuItems.indexOf(lis)}>
      {lis.notauth && (
        <MenuItem component={Link} className={styles.menuItem} href={lis.url}>
          <img
            className={lis.nested ? styles.menuPadding : null}
            src={lis.icon}
            alt={lis.name}
          />
          <div className={styles.menuItemText}>{lis.name}</div>
        </MenuItem>
      )}
    </div>
  ));
}

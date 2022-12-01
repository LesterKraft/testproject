import { LoginItems, MenuItems } from "./MenuItems";
import styles from "/styles/Home.module.scss";
import Divider from "@mui/material/Divider";

export default function DisplayMenu() {
  return (
    <nav className={styles.dMenu}>
      <LoginItems />
      <Divider />
      <MenuItems name="Home" />
      <MenuItems name="Communities" />
      <Divider />
    </nav>
  );
}

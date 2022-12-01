import { MenuItems } from "./MenuItems";
import styles from "/styles/Home.module.scss";

export default function DisplayMenu() {
  return (
    <nav className={styles.dMenu}>
      <MenuItems name="Home" />
      <MenuItems name="Communities" />
    </nav>
  );
}

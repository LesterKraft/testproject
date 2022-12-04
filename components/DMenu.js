import { LoginItems } from "./MenuLogin.js";
import styles from "/styles/Home.module.scss";
import MenuList from "./MenuList.js";

export default function DisplayMenu() {
  return (
    <nav className={styles.dMenu}>
      <LoginItems />
      <MenuList />
    </nav>
  );
}

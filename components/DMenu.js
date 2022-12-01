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
      <MenuItems name="Profile" />
      <MenuItems className={styles.menuPadding} name="My Answers" />
      <MenuItems className={styles.menuPadding} name="My Stories" />
      <MenuItems className={styles.menuPadding} name="My Playlists" />
      <MenuItems className={styles.menuPadding} name="My Topics" />
      <MenuItems className={styles.menuPadding} name="My Communities" />
      <MenuItems className={styles.menuPadding} name="Favorites" />
      <Divider />
      <MenuItems name="Schedule" />
      <MenuItems className={styles.menuPadding} name="My Availability" />
      <MenuItems className={styles.menuPadding} name="My Practices" />
      <MenuItems className={styles.menuPadding} name="My Appointments" />
      <Divider />
      <MenuItems name="Settings" />
      <MenuItems name="Logout" />
    </nav>
  );
}

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
      <div className={styles.menuPadding}>
        <MenuItems name="My Answers" />
        <MenuItems name="My Stories" />
        <MenuItems name="My Playlists" />
        <MenuItems name="My Topics" />
        <MenuItems name="My Communities" />
        <MenuItems name="Favorites" />
      </div>
      <Divider />
      <MenuItems name="Schedule" />
      <div className={styles.menuPadding}>
        <MenuItems name="My Availability" />
        <MenuItems name="My Practices" />
        <MenuItems name="My Appointments" />
      </div>
      <Divider />
      <MenuItems name="Settings" />
      <MenuItems name="Logout" />
    </nav>
  );
}

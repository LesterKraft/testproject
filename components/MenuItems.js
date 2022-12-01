import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";

export function MenuItems({ name, icon = "/menu/" + name + ".svg" }) {
  return (
    <>
      <MenuItem className={styles.menuItem}>
        <img className={styles.menuItemIcon} src={icon} alt={name} />
        <div className={styles.menuItemText}>{name}</div>
      </MenuItem>
    </>
  );
}

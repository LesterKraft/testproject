import menulist from "../data/menuList";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";

export default function MenuList() {
  return (
    <>
      {menulist.map((list) => {
        return (
          <>
            {list.divider && <Divider />}
            <MenuItem className={styles.menuItem} href={list.url}>
              <img
                className={list.nested ? "menuPadding" : ""}
                src={list.icon}
                alt={list.name}
                // style={{ padding: "0 0 0 22px" }}
              />
              <div className={styles.menuItemText}>{list.name}</div>
            </MenuItem>
          </>
        );
      })}
    </>
  );
}

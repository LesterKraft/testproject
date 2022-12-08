import menulist from "../data/menuList";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import styles from "/styles/Home.module.scss";
import Link from "next/link";

export default function MenuList() {
  return menulist.map((list) =>
          <div key={menulist.indexOf(list)}>
            {list.divider && <Divider />}
            <MenuItem
              component={Link}
              className={styles.menuItem}
              href={list.url}
              >
              <img className={list.nested ? styles.menuPadding : styles}
                src={list.icon} alt={list.name} />
              <div className={styles.menuItemText}>{list.name}</div>
            </MenuItem>
            </div>
        );
}

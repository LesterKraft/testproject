import styles from "../styles/Home.module.scss";
import Link from "next/link";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";

export default function HeaderBar() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/" className={styles.headerLogo}>
            Health Shared
          </Link>
          <form className={styles.headerSearch}>
            <input
              className={styles.headerSearchInput}
              type="text"
              placeholder="Search"
            />
            <button className={styles.headerSearchButtom} type="submit">
              <img
                style={{ transform: "rotate(90deg)" }}
                src="../header/search.svg"
                alt="Кнопка «search»"
              />
            </button>
          </form>
        </div>
        <div>
          {/* < href="#" className={styles.headerHelp}>
            <img src="../header/help.svg" alt="help" />
          </Link> */}
          <IconButton>
            <HelpIcon sx={{ color: "white" }} />
          </IconButton>

          <Link href="#" className={styles.headerNotification}>
            <img src="../header/notifications.svg" alt="notifications" />
          </Link>
        </div>
      </header>
    </>
  );
}

import styles from "/styles/Home.module.scss";
import Link from "next/link";
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
            <button className={styles.headerSearchButton} type="submit">
              <img src="../header/search.svg" alt="Кнопка «search»" />
            </button>
          </form>
        </div>
        <div>
          <IconButton>
            <img src="/header/help.svg" alt="help" />
          </IconButton>
          <IconButton className={styles.headerNotification}>
            <img src="/header/notifications.svg" alt="notifications" />
          </IconButton>
        </div>
      </header>
    </>
  );
}

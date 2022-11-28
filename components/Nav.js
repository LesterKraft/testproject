import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function HeaderBar() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.headerLogo}>
          Health Shared
        </Link>
        <form className={styles.headerSearch}>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src="../header/search.svg" alt="Кнопка «search»" />
          </button>
        </form>
        <Link href="#" className={styles.headerHelp}>
          <img src="../header/help.svg" alt="help" />
        </Link>
        <Link href="#" className={styles.headerNotification}>
          <img src="../header/notifications.svg" alt="notifications" />
        </Link>
      </header>
    </>
  );
}

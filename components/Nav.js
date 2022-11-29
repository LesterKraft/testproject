import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function HeaderBar() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerFirst}>
          <Link href="/" className={styles.headerFirstLogo}>
            Health Shared
          </Link>
          <form className={styles.headerFirstSearch}>
            <input
              className={styles.headerFirstSearchInput}
              type="search"
              placeholder="Search"
            />
            <button className={styles.headerFirstSearchButtom} type="submit">
              <img
                style={{ transform: "rotate(90deg)" }}
                src="../header/search.svg"
                alt="Кнопка «search»"
              />
            </button>
          </form>
        </div>
        <div>
          <Link href="#" className={styles.headerHelp}>
            <img src="../header/help.svg" alt="help" />
          </Link>
          <Link href="#" className={styles.headerNotification}>
            <img src="../header/notifications.svg" alt="notifications" />
          </Link>
        </div>
      </header>
    </>
  );
}

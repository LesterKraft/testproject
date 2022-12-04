import { Link } from "@mui/material";
import styles from "/styles/Home.module.scss";

export default function PostsPath({
  question = "How do I know if EVLA is right for me?",
}) {
  return (
    <div className={styles.postsPath}>
      <Link href="/">Home</Link>
      {">"}
      <Link href="/">Questions</Link>
      {">"}
      <Link href="/">{question}</Link>
    </div>
  );
}

import { useRouter } from "next/router";
import CardAnswer from "../../components/CardAnswer";
import CardQuestion from "../../components/CardQuestion";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import Cards from "../../components/Cards";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <CardQuestion />
      <CardAnswer />
      <div className={styles.line}>
        <div className={styles.lineText}>Realted Questions</div>
        <Link href="/pages/questions.js" className={styles.lineMore}>
          SEE MORE
        </Link>
      </div>
      <Cards />
    </>
  );
}

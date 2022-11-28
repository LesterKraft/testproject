import { Card } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";

export default function Post() {
  const router = useRouter();
  return (
    <Card className={styles.cardWrapper}>
      <div className={styles.defaultCard}>
        <h1>
          Post lorem ffdgdfgfdggggggggggggggggggggggggggg {router.query.postId}
        </h1>
      </div>
    </Card>
  );
}

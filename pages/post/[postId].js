import { Card } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Post() {
  const router = useRouter();
  return (
    <Card>
      <div className={styles.defaultCard}>
        <h1>Post {router.query.postId}</h1>
      </div>
    </Card>
  );
}

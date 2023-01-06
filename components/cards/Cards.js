import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";

import TimestampComponent from "../TimestampComponent";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cards() {
  const [cardsArray, setCardsArray] = useState([]);

  const db = getFirestore();
  useEffect(() => {
    getDocs(collection(db, "question"))
      .then((snap) => {
        if (snap.docs.length > 0) {
          let tempArray = [];
          snap.docs.forEach((doc) => {
            tempArray.push({ id: doc.id, ...doc.data() });
          });

          setCardsArray(tempArray);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={styles.cards}>
        {cardsArray.length > 0 ? (
          cardsArray.map((question) => (
            <Card className={styles.cardsWrapper} key={question.id}>
              <div className={styles.cardsWrapperName}> Question</div>
              <div className={styles.cardsWrapperQuestion}>
                {question.title}
              </div>
              <div className={styles.cardsWrapperInfo}>
                {question.views} views •{" "}
                {question.timestamp ? (
                  <TimestampComponent timestamp={question.timestamp} />
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.cardsWrapperText}>
                <Link href={"/questions/" + question.id}>
                  {question.description}
                </Link>
              </div>

              <div className={styles.cardsGradient}>
                <Button
                  className={styles.cardsWrapperAnswers}
                  color="grey"
                  size="large"
                  aria-label="upvotes"
                  startIcon={<QuestionAnswerIcon />}
                >
                  {question.answers} Answer
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </>
  );
}

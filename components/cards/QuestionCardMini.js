import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";
import TimestampComponent from "../../services/timestampComponent";
import Link from "next/link";
import { getAnswers } from "../../services/firestore/getAnswers";
import { useEffect, useState } from "react";

export default function QuestionCardMini(props) {
  const questionData = props.question;
  const [answerArray, setAnswerArray] = useState([]);
  useEffect(() => {
    getAnswers(questionData.id)
      .then((res) => {
        let tempArray = [];
        res.docs.forEach((doc) => {
          tempArray.push({ id: doc.id, ...doc.data() });
        });
        setAnswerArray(tempArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.question.id]);

  return (
    <>
      <Card className={styles.cardsWrapper}>
        <div className={styles.cardsWrapperName}>Question</div>
        <div className={styles.cardsWrapperQuestion}>{questionData.title}</div>
        <div className={styles.cardsWrapperInfo}>
          {questionData.views} views •{" "}
          {questionData.timestamp ? (
            <TimestampComponent timestamp={questionData.timestamp} />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.cardsWrapperText}>
          <Link href={"/questions/" + questionData.id}>
            {questionData.description}
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
            {answerArray.length} Answer
          </Button>
        </div>
      </Card>
    </>
  );
}

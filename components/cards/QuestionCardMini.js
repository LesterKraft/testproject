import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";
import TimestampComponent from "../TimestampComponent";
import Link from "next/link";

export default function QuestionCardMini(props) {
  const question = props.question;
  console.log(question.id);
  return (
    <>
      <Card className={styles.cardsWrapper}>
        <div className={styles.cardsWrapperName}>Question</div>
        <div className={styles.cardsWrapperQuestion}>{question.title}</div>
        <div className={styles.cardsWrapperInfo}>
          {question.views} views •{" "}
          {question.timestamp ? (
            <TimestampComponent timestamp={question.timestamp} />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.cardsWrapperText}>
          <Link href={"/questions/" + question.id}>{question.description}</Link>
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
    </>
  );
}

import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";
import TimestampComponent from "../../utility/timestampComponent";
import Link from "next/link";

export default function QuestionCardMini(props) {
  const questionData = props.question;
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
            {questionData.answers} Answer
          </Button>
        </div>
      </Card>
    </>
  );
}

import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import questionCards from "../../data/questionsCards";
import TimestampComponent from "../TimestampComponent";
import { collection, getDocs } from "firebase/firestore";

// function random() {
//   const min = Math.ceil(1);
//   const max = Math.floor(30);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const theme = createTheme({
  palette: {
    red: {
      main: "#b71c1c",
      contrastText: "#fff",
    },

    grey: {
      main: "#4d4d4d",
      contrastText: "#fff",
    },
  },
});

export async function CollectionsData() {
  const querySnapshot = await getDocs(collection(db, "question"));

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    return { props: { id: doc.id, ...doc.data() } };
  });
}

export default function Cards(props) {
  console.log("props", props);

  return (
    <>
      <div className={styles.cards}>
        {questionCards.map((question) => (
          <Card
            className={styles.cardsWrapper}
            key={questionCards.indexOf(question)}
          >
            <div className={styles.cardsWrapperName}> Question</div>
            <div className={styles.cardsWrapperQuestion}>{question.title}</div>
            <div className={styles.cardsWrapperInfo}>
              {question.views} views •{" "}
              <TimestampComponent timestamp={question.timestamp} />
            </div>
            <div className={styles.cardsWrapperText}>
              {question.description}
            </div>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          </Card>
        ))}
      </div>
    </>
  );
}

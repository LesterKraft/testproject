import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TimestampComponent from "../TimestampComponent";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";

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
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </>
  );
}

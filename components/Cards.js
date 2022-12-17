import styles from "/styles/Home.module.scss";
import { Card } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  return (
    <>
      <div className={styles.cards}>
        <Card className={styles.cardsWrapper}>
          <div className={styles.cardsWrapperName}> Question</div>
          <div className={styles.cardsWrapperQuestion}>
            What is the best way to prepare for EVLA?
          </div>
          <div className={styles.cardsWrapperInfo}>79 views • 3 hours ago</div>
          <div className={styles.cardsWrapperText}>
            A transluminal SFA angioplasty or stent is a minimally-invasive
            procedure carried out in an …
          </div>
          <ThemeProvider theme={theme}>
            <Button
              className={styles.cardsWrapperAnswers}
              color="grey"
              size="large"
              aria-label="upvotes"
              startIcon={<QuestionAnswerIcon />}
            >
              8 Answer
            </Button>
          </ThemeProvider>
        </Card>
        <Card className={styles.cardsWrapper}>
          <div className={styles.cardsWrapperName}> Question</div>
          <div className={styles.cardsWrapperQuestion}>
            What is the best way to prepare for EVLA?
          </div>
          <div className={styles.cardsWrapperInfo}>79 views • 3 hours ago</div>
          <div className={styles.cardsWrapperText}>
            A transluminal SFA angioplasty or stent is a minimally-invasive
            procedure carried out in an …
          </div>
          <ThemeProvider theme={theme}>
            <Button
              className={styles.cardsWrapperAnswers}
              color="grey"
              size="large"
              aria-label="upvotes"
              startIcon={<QuestionAnswerIcon />}
            >
              8 Answer
            </Button>
          </ThemeProvider>
        </Card>
        <Card className={styles.cardsWrapper}>
          <div className={styles.cardsWrapperName}> Question</div>
          <div className={styles.cardsWrapperQuestion}>
            What is the best way to prepare for EVLA?
          </div>
          <div className={styles.cardsWrapperInfo}>79 views • 3 hours ago</div>
          <div className={styles.cardsWrapperText}>
            A transluminal SFA angioplasty or stent is a minimally-invasive
            procedure carried out in an …
          </div>
          <ThemeProvider theme={theme}>
            <Button
              className={styles.cardsWrapperAnswers}
              color="grey"
              size="large"
              aria-label="upvotes"
              startIcon={<QuestionAnswerIcon />}
            >
              8 Answer
            </Button>
          </ThemeProvider>
        </Card>
        <Card className={styles.cardsWrapper}>
          <div className={styles.cardsWrapperName}> Question</div>
          <div className={styles.cardsWrapperQuestion}>
            What is the best way to prepare for EVLA?
          </div>
          <div className={styles.cardsWrapperInfo}>79 views • 3 hours ago</div>
          <div className={styles.cardsWrapperText}>
            A transluminal SFA angioplasty or stent is a minimally-invasive
            procedure carried out in an …
          </div>
          <ThemeProvider theme={theme}>
            <Button
              className={styles.cardsWrapperAnswers}
              color="grey"
              size="large"
              aria-label="upvotes"
              startIcon={<QuestionAnswerIcon />}
            >
              8 Answer
            </Button>
          </ThemeProvider>
        </Card>
        <Card className={styles.cardsWrapper}>
          <div className={styles.cardsWrapperName}> Question</div>
          <div className={styles.cardsWrapperQuestion}>
            What is the best way to prepare for EVLA?
          </div>
          <div className={styles.cardsWrapperInfo}>79 views • 3 hours ago</div>
          <div className={styles.cardsWrapperText}>
            A transluminal SFA angioplasty or stent is a minimally-invasive
            procedure carried out in an …
          </div>
          <ThemeProvider theme={theme}>
            <Button
              className={styles.cardsWrapperAnswers}
              color="grey"
              size="large"
              aria-label="upvotes"
              startIcon={<QuestionAnswerIcon />}
            >
              8 Answer
            </Button>
          </ThemeProvider>
        </Card>
      </div>
    </>
  );
}

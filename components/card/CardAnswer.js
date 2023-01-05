import { Card, Divider, IconButton } from "@mui/material";
import styles from "/styles/Home.module.scss";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";

import ForwardIcon from "@mui/icons-material/Forward";
import ShareIcon from "@mui/icons-material/Share";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useEffect, useState } from "react";

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
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardAnswer(props) {
  const questionData = props.question;
  const [answerCounter, setanswerCounter] = useState(0);
  const db = getFirestore();
  useEffect(() => {
    getDocs(collection(db, "question"))
      .then((snap) => {
        if (snap.docs.length > 0) {
          let tempArray = [];
          snap.docs.map((doc) => {
            if ((questionData.id = doc.id)) {
              setanswerCounter(+1);
            }
            // tempArray.push ({id: doc.id, ...doc.data()});
          });
          console.log(tempArray);
          setCardsArray(tempArray);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card className={styles.answer}>
          <div className={styles.answerTop}>
            <Button
              className={styles.answerTopAnswer}
              color="grey"
              size="large"
              aria-label="upvotes"
              startIcon={<QuestionAnswerIcon />}
            >
              {answerCounter} Answer
            </Button>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div>

          <Collapse
            className={styles.answerBox}
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <Divider className={styles.answerDivider} />
            <div className={styles.answerMain}>
              <CardHeader
                className={styles.answerMainHeader}
                avatar={
                  <img
                    className={styles.answerMainHeaderAva}
                    src="/menu/ava.png"
                    alt="ava"
                  />
                }
                action={
                  <Button
                    className={styles.answerMainHeaderEdit}
                    color="red"
                    size="large"
                    aria-label="edit"
                    startIcon={
                      <EditIcon className={styles.answerMainHeaderEditIcon} />
                    }
                  >
                    Edit
                  </Button>
                }
                title={
                  <div className={styles.answerMainHeaderTitle}>
                    Mr Usman Jaffer
                  </div>
                }
                subheader={
                  <div className={styles.answerMainHeaderSubheader}>
                    Vascular Surgeon
                  </div>
                }
              />
              <div className={styles.answerMainText}>
                If you find yourself dealing with painful varicose veins,
                cramping in your legs, swelling, or restless legs, chances are
                good EVLA is right for you. EVLA focuses on veins that are
                larger and deeper in your legs — the smaller, more surface once
                are better suited for sclerotherapy. Your vascular specialist
                will be sure to come up with a treatment plan that caters to
                your specific needs, not a generalized one-size-fits-all plan.
              </div>
              <div className={styles.answerMainView}>1 view • Now</div>
              <div className={styles.cardFooter}>
                <Button
                  className={styles.cardFooterUploads}
                  color="red"
                  size="large"
                  aria-label="upvotes"
                  startIcon={<ForwardIcon className={styles.upvote} />}
                >
                  Upvote
                </Button>
                <div style={{ flexGrow: "1" }} />

                <IconButton aria-label="down" size="large">
                  <ForwardIcon className={styles.downvote} />
                </IconButton>
                <IconButton aria-label="share" size="large">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="more" size="large">
                  <MoreHorizIcon />
                </IconButton>
              </div>
            </div>
          </Collapse>
        </Card>
      </ThemeProvider>
    </>
  );
}

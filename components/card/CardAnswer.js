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
import { answerWhere } from "../utility/answerWhere";
import menulist from "../../data/menuList";

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
  const [answerArray, setAnswerArray] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    answerWhere(props.question.id)
      .then((res) => {
        let tempArray = [];
        res.docs.forEach((doc) => {
          tempArray.push({ id: doc.id, ...doc.data() });
        });
        setAnswerArray(tempArray);
        console.log(tempArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.question]);

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
              {answerArray.length} Answer
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
            {answerArray.map((list) => (
              <div className={styles.answerMain} key={list.id}>
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
                <div className={styles.answerMainText}>{list.answerText}</div>
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
                <Divider className={styles.answerDivider} />
              </div>
            ))}
          </Collapse>
        </Card>
      </ThemeProvider>
    </>
  );
}

import { Card, Divider, IconButton } from "@mui/material";
import styles from "/styles/Home.module.scss";
import Collapse from "@mui/material/Collapse";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { getAnswers } from "../../utility/getAnswers";
import AnswersElement from "./AnswerElement";

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

export default function AnswersCard(props) {
  const [answerArray, setAnswerArray] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getAnswers(props.question.id)
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
            <AnswersElement list={list} />
          ))}
        </Collapse>
      </Card>
    </>
  );
}

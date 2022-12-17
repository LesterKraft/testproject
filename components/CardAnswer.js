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
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ForwardIcon from "@mui/icons-material/Forward";
import ShareIcon from "@mui/icons-material/Share";

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

export default function CardAnswer() {
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
              1 Answer
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
            <div className={styles.answer}>
              <CardHeader
                className={styles.answerHeader}
                avatar={
                  <img
                    className={styles.answerHeaderAva}
                    src="/menu/ava.png"
                    alt="ava"
                  />
                }
                action={
                  <Button
                    className={styles.answerHeaderEdit}
                    color="red"
                    size="large"
                    aria-label="edit"
                    startIcon={
                      <EditIcon className={styles.answerHeaderEditIcon} />
                    }
                  >
                    Edit
                  </Button>
                }
                title={
                  <div className={styles.answerHeaderTitle}>
                    Mr Usman Jaffer
                  </div>
                }
                subheader={
                  <div className={styles.answerHeaderSubheader}>
                    Vascular Surgeon
                  </div>
                }
              />
              <div className={styles.answerText}>
                If you find yourself dealing with painful varicose veins,
                cramping in your legs, swelling, or restless legs, chances are
                good EVLA is right for you. EVLA focuses on veins that are
                larger and deeper in your legs — the smaller, more surface once
                are better suited for sclerotherapy. Your vascular specialist
                will be sure to come up with a treatment plan that caters to
                your specific needs, not a generalized one-size-fits-all plan.
              </div>
              <div className={styles.answerView}>1 view • Now</div>
              <div className={styles.cardFooter}>
                <div>
                  <Button
                    className={styles.cardFooterUploads}
                    color="red"
                    size="large"
                    aria-label="upvotes"
                    startIcon={<FileUploadIcon />}
                  >
                    Upvote
                  </Button>
                </div>
                <div>
                  <IconButton aria-label="down" size="large">
                    <ForwardIcon />
                  </IconButton>
                  <IconButton aria-label="share" size="large">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="more" size="large">
                    <MoreHorizIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Collapse>
        </Card>
      </ThemeProvider>
    </>
  );
}

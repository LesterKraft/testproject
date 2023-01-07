import { Card, Divider } from "@mui/material";
import * as React from "react";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import ForwardIcon from "@mui/icons-material/Forward";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TimestampComponent from "../../utility/timestampComponent";
import ReplyIcon from "@mui/icons-material/Reply";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { collection, doc, getFirestore, addDoc } from "firebase/firestore";

export default function QuestionCard(props) {
  const questionData = props.question;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function formSubmit(e) {
    e.preventDefault();
    const db = getFirestore();
    await addDoc(collection(db, "answers"), {
      questionId: questionData.id,
      answerText: document.getElementById("answer").value,
      timestamp: new Date().getTime(),
      views: Math.floor(Math.random() * 50),
    });
  }

  return (
    <>
      <Card className={styles.card}>
        <div className={styles.cardTop}>
          <img
            className={styles.cardTopIcon}
            src="/card/question.svg"
            alt="question"
          />

          <div className={styles.cardTopQuestion}>QUESTION</div>
          <div className={styles.cardTopTitle}>{questionData.title}</div>
        </div>
        <div className={styles.cardText}>{questionData.description}</div>
        <div className={styles.cardTags}>Tags</div>

        {questionData.tags.map((tag) => (
          <Link href="#" className={styles.cardTagsWrapper} key={tag}>
            {tag}
          </Link>
        ))}

        <div className={styles.cardPhoto}>Related Photo</div>
        <Link href="#" className={styles.cardPhotoWrapper}>
          <img src="/card/attachment.svg" alt="help" />
          <div>1038421.4564.png</div>
        </Link>
        <div className={styles.cardViews}>
          {questionData.views} views •&nbsp;
          <TimestampComponent timestamp={questionData.timestamp} />
        </div>
        <Divider className={styles.cardDivider} />

        <div className={styles.cardFooter}>
          <Button
            className={styles.cardFooterUploads}
            color="red"
            size="large"
            aria-label="upvotes"
            startIcon={<ForwardIcon className={styles.upvote} />}
          >
            3 Upvotes
          </Button>
          <Button
            className={styles.cardFooterFavorites}
            color="grey"
            size="large"
            aria-label="upvotes"
            startIcon={<FavoriteBorderIcon />}
          >
            Favorites
          </Button>

          <div style={{ flexGrow: "1" }} />
          <Button
            onClick={handleClickOpen}
            className={styles.cardFooterSave}
            color="grey"
            size="large"
            aria-label="upvotes"
            startIcon={<ReplyIcon />}
          >
            Reply
          </Button>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <form onSubmit={(e) => formSubmit(e)}>
              <DialogTitle>Your Answer</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="normal"
                  id="answer"
                  label="answer"
                  type="answer"
                  fullWidth
                  multiline
                  rows={10}
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  onClick={handleClose}
                  type="submit"
                  value="submit"
                  color="red"
                >
                  Reply
                </Button>
              </DialogActions>
            </form>
          </Dialog>
          <Button
            className={styles.cardFooterSave}
            color="grey"
            size="large"
            aria-label="upvotes"
            startIcon={<PlaylistAddIcon />}
          >
            Save to
          </Button>
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
      </Card>
    </>
  );
}

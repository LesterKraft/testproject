import { Card, Divider } from "@mui/material";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import ForwardIcon from "@mui/icons-material/Forward";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TimestampComponent from "../TimestampComponent";

function calculateTime(timestamp) {
  const today = new Date().getTime();
  const dif = (today - timestamp) / 1000 / 60 / 60 / 24 / 365;
  return dif;
}

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

export default function CardQuestion(props) {
  const questionData = props.question;
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
          <Link
            href="#"
            className={styles.cardTagsWrapper}
            key={questionData.tags.indexOf(tag)}
          >
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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Card>
    </>
  );
}

import { Card, Divider } from "@mui/material";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import ForwardIcon from "@mui/icons-material/Forward";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

export default function CardQuestion() {
  const title = "How do I know if EVLA is right for me?";
  const text =
    "I'm 30Y female with spider vein problems since age 18. After years of sclero, my doctor recommended ultrasound scans. I was then diagnosed me with advanced venous insufficiency and recommended EVLT. From what I've read EVLT is almost exclusively used to treat varicose veins. I do not have varicose veins (yet!) but am interested in warding off future problems as well as treating my current spider veins. Is EVLT a good candidate for someone with advanced venous insufficiency but no varicose veins?";
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
          <div className={styles.cardTopTitle}>{title}</div>
        </div>
        <div className={styles.cardText}>{text}</div>
        <div className={styles.cardTags}>Tags</div>

        <Link href="#" className={styles.cardTagsWrapper}>
          EVLA
        </Link>
        <div className={styles.cardPhoto}>Related Photo</div>
        <Link href="#" className={styles.cardPhotoWrapper}>
          <img src="/card/attachment.svg" alt="help" />
          <div>1038421.4564.png</div>
        </Link>
        <div className={styles.cardViews}>32 views • 1 day ago</div>
        <Divider className={styles.cardDivider} />
        <ThemeProvider theme={theme}>
          <div className={styles.cardFooter}>
            <div>
              <Button
                className={styles.cardFooterUploads}
                color="red"
                size="large"
                aria-label="upvotes"
                startIcon={<FileUploadIcon />}
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
            </div>
            <div>
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
        </ThemeProvider>
      </Card>
    </>
  );
}

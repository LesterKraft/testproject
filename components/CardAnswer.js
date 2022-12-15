import { Card, Divider, IconButton } from "@mui/material";
import styles from "/styles/Home.module.scss";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
// import IconButton from "@mui/material/IconButton";
// import ForwardIcon from "@mui/icons-material/Forward";
// import ShareIcon from "@mui/icons-material/Share";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export default function CardAnswer() {
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
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <Divider className={styles.answerDivider} />

          <CardHeader
            className={styles.cardHeader}
            avatar={
              <img
                className={styles.cardHeaderAva}
                src="/menu/ava.png"
                alt="ava"
              />
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title="Mr Usman Jaffer"
            subheader="Vascular Surgeon"
          />
        </Card>
      </ThemeProvider>
    </>
  );
}

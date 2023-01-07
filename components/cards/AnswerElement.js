import styles from "../../styles/Home.module.scss";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ForwardIcon from "@mui/icons-material/Forward";
import { Divider, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TimestampComponent from "../../utility/timestampComponent";

export default function AnswersElement(props) {
  const list = props.list;
  return (
    <>
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
            <div className={styles.answerMainHeaderTitle}>Mr Usman Jaffer</div>
          }
          subheader={
            <div className={styles.answerMainHeaderSubheader}>
              Vascular Surgeon
            </div>
          }
        />
        <div className={styles.answerMainText}>{list.answerText}</div>
        <div className={styles.answerMainView}>
          {list.views} view • <TimestampComponent timestamp={list.timestamp} />
        </div>
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
    </>
  );
}

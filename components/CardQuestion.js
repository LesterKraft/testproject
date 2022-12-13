import { Card, Divider } from "@mui/material";
import styles from "/styles/Home.module.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
        <Stack className={styles.cardTagsWrapper} direction="row" spacing={2}>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Stack>
        {/* <div className={styles.cardTagsWrapper}></div> */}
        <div className={styles.cardPhoto}>Related Photo</div>

        <div className={styles.cardViews}>32 views • 1 day ago</div>
        <Divider className={styles.cardDivider} />
      </Card>
    </>
  );
}

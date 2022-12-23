import { useRouter } from "next/router";
import CardAnswer from "../../components/card/CardAnswer";
import CardQuestion from "../../components/card/CardQuestion";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import Cards from "../../components/card/Cards";

export default function Post() {
  const router = useRouter();
  const question = {
    title: "How do I know if EVLA is right for me?",
    description:
      "I'm 30Y female with spider vein problems since age 18. After years of sclero, my doctor recommended ultrasound scans. I was then diagnosed me with advanced venous insufficiency and recommended EVLT. From what I've read EVLT is almost exclusively used to treat varicose veins. I do not have varicose veins (yet!) but am interested in warding off future problems as well as treating my current spider veins. Is EVLT a good candidate for someone with advanced venous insufficiency but no varicose veins?",
    tags: ["ELVA", "Agorafobia"],
    views: 6,
    timestamp: new Date(1057165200000),
  };

  return (
    <>
      <CardQuestion question={question} />
      <CardAnswer />
      <div className={styles.line}>
        <div className={styles.lineText}>Realted Questions</div>
        <Link href="/pages/questions.js" className={styles.lineMore}>
          SEE MORE
        </Link>
      </div>
      <Cards />
    </>
  );
}

import { useRouter } from "next/router";
import CardAnswer from "../../components/card/CardAnswer";
import CardQuestion from "../../components/card/CardQuestion";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import Cards from "../../components/card/Cards";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export async function getServerSideProps(context) {
  const db = getFirestore();
  const docRef = doc(db, "question", context.query.questionId);
  const docSnap = await getDoc(docRef);
  let questionData;
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    questionData = {
      ...docSnap.data(),
      id: docSnap.id,
    };
    return {
      props: { question: questionData, questionId: context.query.questionId },
    };
  } else {
    return { props: { question: null, questionId: context.query.questionId } };
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export default function Post(props) {
  console.log("props", props);
  const router = useRouter();
  const question = {
    title: props.question.title,
    description: props.question.description,

    tags: props.question.tags,
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

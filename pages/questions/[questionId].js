import { useRouter } from "next/router";
import AnswerCard from "../../components/cards/AnswerCard";
import QuestionCard from "../../components/cards/QuestionCard";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import Cards from "../../components/cards/Cards";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getQuestion } from "../../components/utility/getQuestion";

export default function Post(props) {
  const router = useRouter();
  const question = {
    id: props.question.id,
    title: props.question.title,
    description: props.question.description,
    tags: props.question.tags,
    views: 6,
    timestamp: new Date(1057165200000),
  };

  return (
    <>
      <QuestionCard question={question} />
      <AnswerCard question={question} />
      <div className={styles.line}>
        <div className={styles.lineText}>Realted Questions</div>
        <Link href="/pages/questions/index.js" className={styles.lineMore}>
          SEE MORE
        </Link>
      </div>
      <Cards />
    </>
  );
}

export async function getServerSideProps(context) {
  const snapshot = await getQuestion(context.query.questionId);

  if (snapshot.exists()) {
    return {
      props: {
        question: {
          id: snapshot.id,
          ...snapshot.data(),
        },
      },
    };
  } else {
    return null;
  }
}

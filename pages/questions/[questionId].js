import { useRouter } from "next/router";
import AnswerCard from "../../components/cards/AnswerCard";
import QuestionCard from "../../components/cards/QuestionCard";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getQuestion } from "../../utility/getQuestion";
import QuestionCardMini from "../../components/cards/QuestionCardMini";
import { useEffect, useState } from "react";

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
  const [cardsArray, setCardsArray] = useState([]);

  const db = getFirestore();
  useEffect(() => {
    getDocs(collection(db, "question"))
      .then((snap) => {
        if (snap.docs.length > 0) {
          let tempArray = [];
          snap.docs.slice(0, 5).forEach((doc) => {
            tempArray.push({ id: doc.id, ...doc.data() });
          });

          setCardsArray(tempArray);
        }
      })
      .catch((error) => console.log(error));
  }, []);

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
      <div className={styles.cards}>
        {cardsArray.length > 0 ? (
          cardsArray.map((question) => (
            <QuestionCardMini key={question.id} question={question} />
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
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

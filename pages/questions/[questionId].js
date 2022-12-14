import { useRouter } from "next/router";
import AnswersCard from "../../components/cards/AnswersCard";
import QuestionCard from "../../components/cards/QuestionCard";
import styles from "/styles/Home.module.scss";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getQuestion } from "../../services/firestore/getQuestion";
import QuestionCardMini from "../../components/cards/QuestionCardMini";
import { useEffect, useState } from "react";
import getQuestions from "../../services/firestore/getQuestions";

export default function Post(props) {
  const question = {
    id: props.question.id,
    title: props.question.title,
    description: props.question.description,
    tags: props.question.tags,
    views: props.question.views,
    timestamp: props.question.timestamp,
  };
  const [cardsArray, setCardsArray] = useState([]);

  useEffect(() => {
    getQuestions(5)
      .then((snap) => {
        if (Array.isArray(snap.docs) && snap.docs.length > 0) {
          let tempArray = [];
          snap.docs.forEach((doc) => {
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
      <AnswersCard question={question} />
      <div className={styles.line}>
        <div className={styles.lineText}>Realted Questions</div>
        <Link href="/questions/" className={styles.lineMore}>
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
  const question = { id: snapshot.id, ...snapshot.data() };

  return {
    props: { question: question },
  };
}

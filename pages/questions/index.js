import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from "/styles/Home.module.scss";
import QuestionCardMini from "../../components/cards/QuestionCardMini";

export default function QuestionsIndex() {
  const [cardsArray, setCardsArray] = useState([]);

  const db = getFirestore();
  useEffect(() => {
    getDocs(collection(db, "question"))
      .then((snap) => {
        if (snap.docs.length > 0) {
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
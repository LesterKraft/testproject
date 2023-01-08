import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";

export default async function getQuestions() {
  const [cardsArray, setCardsArray] = useState([]);
  const db = getFirestore();
  const snapshot = await getDocs(collection(db, "questions"));
  if (Array.isArray(snapshot.docs) && snapshot.docs.length > 0) {
    let tempArray = [];
    snapshot.docs.forEach((doc) => {
      tempArray.push({ id: doc.id, ...doc.data() });
    });
    setCardsArray(tempArray);
  }
  return cardsArray;
}

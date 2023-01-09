import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export default async function getQuestions() {
  const db = getFirestore();

  const snapshot = await getDocs(collection(db, "questions"));

  return snapshot;
}

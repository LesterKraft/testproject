import { getFirestore, query, where, limit, orderBy } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export default async function getQuestions(count) {
  const db = getFirestore();
  const q = query(
    collection(db, "questions"),
    orderBy("timestamp"),
    limit(count)
  );

  return await getDocs(q);
}

import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export async function answerWhere(questionId) {
  const db = getFirestore();
  const q = query(
    collection(db, "answer"),
    where("questionId", "==", questionId)
  );

  return await getDocs(q);
}

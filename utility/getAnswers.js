import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export async function getAnswers(questionId) {
  const db = getFirestore();
  const q = query(
    collection(db, "answers"),
    where("questionId", "==", questionId)
  );

  return await getDocs(q);
}

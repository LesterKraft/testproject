import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  getCountFromServer,
} from "firebase/firestore";

export async function getCountAnswers(questionId) {
  const db = getFirestore();
  const q = query(
    collection(db, "answers"),
    where("questionId", "==", questionId)
  );
  const snap = await getCountFromServer(q);
  return <>snap.data().count</>;
}

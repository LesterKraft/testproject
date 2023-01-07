import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export async function getQuestion(questionId) {
  const db = getFirestore();
  const docRef = doc(db, "questions", questionId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap;
  } else {
    return null;
  }
}

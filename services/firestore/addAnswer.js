import { addDoc, collection, getFirestore } from "firebase/firestore";

export default async function addAnswer(answer) {
  const db = getFirestore();
  await addDoc(collection(db, "answers"), {
    questionId: answer.questionId,
    answerText: answer.answerText,
    timestamp: answer.timestamp,
    views: answer.views,
  });
}

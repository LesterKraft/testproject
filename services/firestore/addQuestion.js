import { addDoc, collection, getFirestore } from "firebase/firestore";

export default async function AddQuestion(question) {
  const db = getFirestore();
  await addDoc(collection(db, "questions"), {
    title: question.title,
    description: question.description,
    tags: question.tags,
    timestamp: question.timestamp,
    views: question.views,
  });
}

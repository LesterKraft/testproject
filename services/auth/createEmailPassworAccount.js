import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function createEmailPasswordAccount(email, password) {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
}

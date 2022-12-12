import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default async function firebaseEmailPasswordAuth(email, password) {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password);
}

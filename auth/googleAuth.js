import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function googleAuth() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCZ3_ouqAJRfOTYMwfnZDwFMCOmupI3KOY",
    authDomain: "testproject-5f593.firebaseapp.com",
    projectId: "testproject-5f593",
    storageBucket: "testproject-5f593.appspot.com",
    messagingSenderId: "985598119305",
    appId: "1:985598119305:web:53e0a5c651066df80c6558",
    measurementId: "G-3W4PYX48WX",
  });
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

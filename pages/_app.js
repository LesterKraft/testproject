import "/styles/globals.scss";
import Layout from "/components/Layout";
import {initializeApp} from "firebase/app";

const MyApp = (props) => {
  const { Component, pageProps } = props;
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyCZ3_ouqAJRfOTYMwfnZDwFMCOmupI3KOY",
        authDomain: "testproject-5f593.firebaseapp.com",
        projectId: "testproject-5f593",
        storageBucket: "testproject-5f593.appspot.com",
        messagingSenderId: "985598119305",
        appId: "1:985598119305:web:53e0a5c651066df80c6558",
        measurementId: "G-3W4PYX48WX",
    });

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

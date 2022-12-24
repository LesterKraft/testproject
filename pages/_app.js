import "/styles/globals.scss";
import Layout from "/components/Layout";
import initFirebase from "../auth/initFirebase";

const MyApp = (props) => {
  const { Component, pageProps } = props;
  initFirebase();

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

import "/styles/globals.scss";
import Layout from "/components/Layout";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

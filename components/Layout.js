import Head from "next/head";
import HeaderBar from "./Nav";

export default function Layout({ children, title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <HeaderBar />
      <div className="layoutGrid">
        <div />
        <div>{children}</div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Blog",
  description: "This is a health blog.",
  keywords: "health, blog, doctors ",
};

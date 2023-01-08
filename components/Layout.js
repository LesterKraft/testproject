import Head from "next/head";
import DisplayMenu from "./menu/DisplayMenu";
import HeaderBar from "./header/HeaderBar";
import NextBreadcrumbs from "./NextBreadCrumbs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    red: {
      main: "#b71c1c",
      contrastText: "#fff",
    },

    grey: {
      main: "#4d4d4d",
      contrastText: "#fff",
    },
    black: {
      main: "#2a2a2b",
      contrastText: "#fff",
    },
    white: {
      main: "#ffffff",
      contrastText: "#fff",
    },
  },
});

export default function Layout({ children, title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <ThemeProvider theme={theme}>
        <HeaderBar />
        <div className="layoutGrid">
          <DisplayMenu />
          <main>
            {/*<NextBreadcrumbs />*/}
            {children}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

Layout.defaultProps = {
  title: "Blog",
  description: "This is a health blog.",
  keywords: "health, blog, doctors ",
};

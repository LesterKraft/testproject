import PrimarySearchAppBar from "./appbar";

export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="layoutGrid">
        <div />
        <div>{children}</div>
      </div>
    </>
  );
}

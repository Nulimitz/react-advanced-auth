import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ fullscreen, children }) {
  return (
    <>
      <Navbar />
      <main className={`${fullscreen ? "fullscreen" : ""}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

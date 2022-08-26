import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ navbar, children }) {
  return (
    <>
      {navbar && <Navbar />}
      <main className={`${navbar ? "" : "fullpage"}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

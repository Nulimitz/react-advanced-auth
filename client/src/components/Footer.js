import Logo from "../assets/images/logo.png";
function Footer() {
  return (
    <footer>
      <div className="container text-center">
        &copy; 2022 <img src={Logo} width="24" height="24" alt="Home" /> React
        App
      </div>
    </footer>
  );
}

export default Footer;

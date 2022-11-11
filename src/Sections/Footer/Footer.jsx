import "../Footer/Contact.css";
import Half from "./Components/Circle/Half";
import "./Components/Circle/Half.css";
import FooterBottom from "./Components/FooterBottom/FooterBottom";
import FooterNav from "./Components/FooterNav/FooterNav";
import Form from "./Components/Forme/Form";

function Footer() {
  return (
    <footer className="footer">
      {/* Use semantics */}
      <Half />
      <Form />
      <FooterNav />
      <FooterBottom />
    </footer>
  );
}

export default Footer;

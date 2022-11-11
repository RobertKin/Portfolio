import "../Header/Header.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function Header() {
  return (
    <header className="header">
      {/* Header is not the same thing as the head tag. */}
      {/* Use semantics */}
      <div id="robert">
        {/* For css use classes, not ids */}
        {/* Choose better the name of your ids. Robert is not a good name */}
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}

export default Header; // Be consistent with your naming conventions.

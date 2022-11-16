import "./App.css";

import React from "react";
import Head from "./Sections/Header/Header";
import Content from "./Sections/Content/Content";
import Footer from "./Sections/Footer/Footer";
import Work from "./Sections/Content/Components/Work/Work";
import Team from "./Sections/Content/Components/Team/Team";

function App() {
  return (
    <div className="first-container">
      <Head />
      <Team />
      <Work />
      <Footer />
    </div>
  );
}

export default App;

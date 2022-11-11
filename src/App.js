import Team from "./Sections/Content/Components/Team/Team";
import Work from "./Sections/Content/Components/Work/Work";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header";

// ALT + SHIFT + O to organize imports
function App() {
  return (
    <>
      <Header />
      {/* Be consistent with name convention */}
      <Team />
      <Work />
      <Footer />
    </>
  );
}

export default App;

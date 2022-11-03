import React from "react";
import "../Content/Content.css"
import Team from "./Components/Team/Team";
import Work from "./Components/Work/Work";
import Footer from "../../Sections/Footer/Contact"

function Content () {
    return(
        <div className="content">
            <Team />
            <Work />
            <Footer />
        </div>
    )
}

export default Content;
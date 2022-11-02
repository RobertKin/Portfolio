import React from "react";
import "../Content/Content.css"
import Team from "./Components/Team/Team";
import Work from "./Components/Work/Work";

function Content () {
    return(
        <div className="content">
            <Team />
            <Work />
        </div>
    )
}

export default Content;
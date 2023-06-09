// Gives Faculti UI part

import React from "react";
import FacultiSlider from "./FacultiSlider";

export default function FacultiUi({ faculties }) {
  const pad = {
    marginLeft: "200px",
    marginTop: "40px",
  };

  return (
    <div className="album py-5 bg-light" paddingTop>
      <div className="container" style={pad}>
        <div className="row ">
          <div className="col card-hover shadow-none bg-none position-relative mb-4 mb-lg-5">
            {<FacultiSlider faculties={faculties} />}
          </div>
        </div>
      </div>
    </div>
  );
}

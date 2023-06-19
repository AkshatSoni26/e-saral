import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import "../../CSS/Header.css";

import SubjectHeader from "../../Subject/SubjectHeader";

export default function Header2() {
  const navigate = useNavigate();

  const location = useLocation();

  const data = location.state.defi;
  console.log("Header 2 data", data);

  console.log("location", location.state);

  function TabChange(a) {
    const data = JSON.parse(localStorage.getItem("chapter data"));

    data["ButtonClicked"] = a;

    console.log("testing data is work properly or not", data);

    navigate("/Content", {
      state: data,
    });

    console.log("moving from on tab to another tab and data is as", data);
  }

  return (
    <>
      <SubjectHeader />

      <div className="header1">
        <div className="heading">
          <a className="button_effect" onClick={() => TabChange("learn")}>
            Learn
          </a>

          <a className="button_effect" onClick={() => TabChange("practise")}>
            Practice
          </a>

          <a className="button_effect" onClick={() => TabChange("revise")}>
            Revise
          </a>

          <a className="button_effect" onClick={() => TabChange("test")}>
            Test
          </a>
        </div>
      </div>
    </>
  );
}

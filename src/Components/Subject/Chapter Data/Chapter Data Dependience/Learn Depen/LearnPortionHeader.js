import React, { useContext } from "react";
import "./LearnPortionHeader.css";
import { useNavigate } from "react-router-dom";

import { ChapterData_1 } from "../../ChapterData";

export default function LearnPortionHeader() {
  const chapterData = useContext(ChapterData_1);

  console.log("Data in Learn Portion Header", chapterData);

  const chapter_name = chapterData.display_name;
  const total_lectures = chapterData.content.learn.length;

  const navigate = useNavigate();

  console.log("chapter_data", chapterData);

  function navi() {
    console.log("Learn Portion Header Navigate");

    navigate("/Content", {
      state: {
        chapterData: chapterData,
        chapter_name: chapter_name,
        ButtonClicked: "learn",
      },
    });
  }

  return (
    <>
      <a onClick={navi}>
        <div style={{ display: "flex" }} paddingTop="10px">
          <h3>{chapter_name}</h3>
          <h6 style={{ paddingLeft: "800px" }}>
            Total Lectures:{total_lectures}
            <p>
              {" "}
              <i class="arrow right"></i>
            </p>
          </h6>
        </div>
      </a>
    </>
  );
}

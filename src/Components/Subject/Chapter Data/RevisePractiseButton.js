import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/Header.css";
import { ChapterData_1 } from "./ChapterData";

export default function RevisepractiseButton() {
  const navigate = useNavigate();

  const chapterData = useContext(ChapterData_1);

  const chapter_name = chapterData.display_name;

  console.log("Revise Practics Test Button data", chapterData);

  const a_tag_style = {
    paddingLeft: "30px",
    paddingRight: "30px",
    marginRight: "30px",
    marginLeft: "30px",
    textDecoration: "none",
  };

  return (
    <div class="container-fluid">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-6 col-md-12">
          <div>
            {/* {console.log('practise under button', value)} */}

            <a
              className="btn btn-outline-primary three-d"
              style={a_tag_style}
              onClick={() =>
                navigate("/Content", {
                  state: {
                    chapterData: chapterData,
                    chapter_name: chapter_name,
                    ButtonClicked: "practise",
                  },
                })
              }
            >
              practise
            </a>

            <a
              className="btn btn-outline-primary three-d "
              style={a_tag_style}
              onClick={() =>
                navigate("/Content", {
                  state: {
                    chapterData: chapterData,
                    chapter_name: chapter_name,
                    ButtonClicked: "revise",
                  },
                })
              }
            >
              revise
            </a>

            <a
              className="btn btn-outline-primary three-d "
              style={a_tag_style}
              onClick={() =>
                navigate("/Content", {
                  state: {
                    chapterData: chapterData,
                    chapter_name: chapter_name,
                    ButtonClicked: "test",
                  },
                })
              }
            >
              test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

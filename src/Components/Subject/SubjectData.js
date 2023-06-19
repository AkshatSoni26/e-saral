// this is responsible for Subject data

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChapterData from "../Subject/Chapter Data/ChapterData";
import SideBar from "./Side Bar/SideBar.js";
import "../CSS/carsoul.css";
import SubjectHeader from "./SubjectHeader";
import SpinnerForLoad from "../Spinner";



const context_data_1 = createContext();
const context_data_2 = createContext();

function SubjectData() {
  const [chapters, setChapter] = useState();

  let { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    const URL =
      "https://development.esaral.com/v2/contents/get-node-content-tree";

    const Headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Access Key"),
    };

    axios
      .post(
        URL,
        {
          node_id: state.node_id,
        },
        { headers: Headers }
      )
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          console.log("Subject Data", response);
          setChapter(response.data.data);
        } else {
          document.getElementById("user_id").innerHTML = "ERROR";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("Access Key")) {
      navigate("/login");
    }
  });

  return !chapters ? (
 <SpinnerForLoad />
  ) : (
    <>
      <SubjectHeader />

      <div className="side">
        <context_data_1.Provider value={chapters}>
          <div id="menu">
            <SideBar />
          </div>
        </context_data_1.Provider>

        <div id="content">
          {console.log(chapters)}
          {chapters.node_content_tree.map((response, i) => (
            <div key={i}>
              <context_data_2.Provider
                value={{ response: response, key: i, id: i }}
              >
                <ChapterData />
              </context_data_2.Provider>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SubjectData;

export { context_data_1, context_data_2 };

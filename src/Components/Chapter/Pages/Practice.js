import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import IsPDF from "../ComponentsOfChapeters/IsPDF";
import IsVideo from "../ComponentsOfChapeters/IsVideo";

export default function Practice() {
  const dataFromSession = localStorage.getItem("chapter data"); // Taking data from storage

  const dataConver = JSON.parse(dataFromSession); // Converting data from json to Object

  const practise_data = dataConver.chapterData.content.practise;

  return (
    <>
      <div>
        {practise_data.map((item_1, i) => {
          {
            return item_1.content_data.map((item_2, j) => {
              return (
                <div class="container-fluid">
                  <div class="row gy-4 justify-content-center">
                    <h2>{item_2.display_name}</h2>

                    {item_2.sheet_content.map((item_3, k) => {
                      return (
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <h4>{item_3.display_name}</h4>
                          <p>{item_3.description}</p>

                          {/* {console.log("item_3", item_3)} */}

                          {item_3.content_data.content_type == "PDF" ? (
                            <IsPDF
                              content_info={item_3.content_data.content_info}
                            />
                          ) : (
                            <IsVideo data={item_3} />
                          )}
                          <br />
                        </div>
                      );
                    })}

                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              );
            });
          }
        })}
      </div>
    </>
  );
}

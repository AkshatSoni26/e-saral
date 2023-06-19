import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Practice() {
  const dataFromSession = localStorage.getItem("chapter data"); // Taking data from storage

  const dataConver = JSON.parse(dataFromSession); // Converting data from json to Object

  console.log(
    "we are under the Learn components",
    dataConver.chapterData.content.practise
  );

  const practise_data = dataConver.chapterData.content.practise;

  const navigate = useNavigate();

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

                          {console.log("item_3", item_3)}

                          {item_3.content_data.content_type == "PDF" ? (
                            <a
                              onClick={() =>
                                navigate("/pdf", {
                                  state: item_3.content_data.content_info,
                                })
                              }
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"
                                alt={item_3.content_data.content_info.name}
                              />
                            </a>
                          ) : (
                            <div class="col-xl-3 col-lg-4 col-md-6">
                              <img
                                src={item_3.content_data.content_info.thumbnail}
                                style={{ height: "auto" }}
                              />
                            </div>
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

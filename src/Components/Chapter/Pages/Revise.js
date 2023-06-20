import React from "react";
import ComingSoon from "../../URLS/ComingSoon";
import PDForVideo from "../ComponentsOfChapeters/PDForVideo";

export default function Revise() {
  const dataFromSession = localStorage.getItem("chapter data"); // Taking data from storage

  const dataConver = JSON.parse(dataFromSession); // Converting data from json to Object

  console.log(
    "we are under the revise components",
    dataConver.chapterData.content.revise
  );

  const revise_data = dataConver.chapterData.content.revise;

  return revise_data.length == 0 ? (
    <ComingSoon />
  ) : (
    <>
      <div>
        {revise_data.map((item_1, i) => {
          return (
            // console.log("item_1",item_1)
            item_1.content_data.map((item_2, j) => {
              return (
                <div class="container-fluid">
                  <div class="row gy-4 justify-content-center">
                    <h1> {item_2.display_name} </h1>

                    {console.log("item_2.sheet_content", item_2.sheet_content)}

                    {item_2.sheet_content.map((item_3, k) => {
                      return (
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          {<PDForVideo data={item_3} />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          );
        })}
      </div>
    </>
  );
}

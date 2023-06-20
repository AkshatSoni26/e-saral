import React from "react";
import ComingSoon from "../../URLS/ComingSoon";
import TestCompStart from "../ComponentsOfChapeters/TestCompStart";

export default function TestPage() {
  const dataFromSession = localStorage.getItem("chapter data"); // Taking data from storage
  const dataConver = JSON.parse(dataFromSession); // Converting data from JSON to object

  console.log(
    "we are under the revise components",
    dataConver.chapterData.content.revise
  );

  const test_data = dataConver.chapterData.content.test;

  console.log("test data from test page", test_data);

  return (
    <>
      {!test_data.content_data && test_data.content_data ? (
        <ComingSoon />
      ) : (
        <>
          <div>
            {test_data.map((item_1, i) => {
              console.log("item_1 in test page", item_1);

              return (
                <div key={i}>
                  {item_1.content_data.map((item_2, j) => {
                    console.log("item 2", item_2);
                    return <TestCompStart item_2={item_2} />;
                  })}
                </div>
              );
            })}
          </div>
          <br />
        </>
      )}
    </>
  );
}

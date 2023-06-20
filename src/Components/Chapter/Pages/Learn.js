import "./Learn.css";
import ComingSoon from "../../URLS/ComingSoon";
import PDForVideo from "../ComponentsOfChapeters/PDForVideo";

export default function Learn() {
  const dataFromSession = localStorage.getItem("chapter data"); // Taking data from storage

  const dataConver = JSON.parse(dataFromSession); // Converting data from json to Object

  console.log(
    "we are under the Learn components",
    dataConver.chapterData.content.learn
  );

  const learn_data = dataConver.chapterData.content.learn;

  return learn_data.length == 0 ? (
    <ComingSoon />
  ) : (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row gy-4 ">
            {learn_data.map((data, index) => {
              return (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="gallery-item h-100">
                    <PDForVideo data={data} index={index} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

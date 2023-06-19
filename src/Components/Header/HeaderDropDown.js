import React from "react";
import { setGlobalVariable } from "../service folder/Service";
import { useNavigate } from "react-router-dom";


export default function HeaderDropDown( {data, data2, j} ) {

    const navigate = useNavigate();

    function CourseSwitcher(phase_id, subcourse_id) {
        setGlobalVariable({
          subcourse_id: subcourse_id,
          phase_id: phase_id,
        });
    
        navigate("/");
        window.location.reload();
      }

  return (
    <div>
      <div>
        {data.subcourses.length == 1 ? (
          <>
            {console.log(
              "{ phase_id: data.phase_id, subcourses_id: data.subcourses[0].id }",
              {
                phase_id: data2.phase_id,
                subcourses_id: data2.subcourses[0].id,
              }
            )}

            <a
              className="btn dropHeader1"
              key={j}
              // onClick={() => console.log("phase_id, subcourses" ,data2.phase_id, data2.subcourses[0].id)}

              onClick={() => CourseSwitcher(data2.phase_id, data2.subcourses[0].id)}
            >
              {" "}
              {data2.course_name}
              {data2.is_current == true ? (
                <p className="curr">(current)</p>
              ) : null}
            </a>
          </>
        ) : (
          <>
            <div className="dropHeader">{data2.course_name}</div>

            {data2.subcourses.map((data1, k) => {
              return (
                <div className="dropCurr">
                  <a
                    className="btn dropHeader1 dropHeader2"
                    tag="a"
                    key={k}
                    onClick={() => {
                      CourseSwitcher(data2.phase_id, data1.id);
                    }}
                  >
                    {data1.name}
                    {console.log(
                      "{ phase_id: data.phase_id, subcourses_id: data.subcourses.id }",
                      {
                        phase_id: data2.phase_id,
                        subcourses_id: data1.id,
                      }
                    )}
                    {data1.is_current == true ? (
                      <p className="curr">(current)</p>
                    ) : null}{" "}
                  </a>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

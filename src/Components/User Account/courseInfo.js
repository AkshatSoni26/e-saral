import React from "react";
import "./account.css";
import { CourseInfoSVG } from "../SVGs/Svgs";

export default function CourseInfo({ ENROLLMENT_DATA }) {
  console.log("ENROLLMENT_DATA", ENROLLMENT_DATA);

  return (
    <div>
      <div className="container ProCss">
        
        {CourseInfoSVG}

        <div className="statSty">My Courses</div>
      </div>

      {ENROLLMENT_DATA.map((data, index) => (
        <div key={index} className="container userInfo">
          <div>
            <img
              className="image"
              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
            ></img>
          </div>

          <div className="proPad">
            <div className="userInfo">
              <div className="course-name">{data.course_name}</div>

              {data.is_current === true ? (
                <div className="Enrolled">
                  <span>enrolled</span>
                </div>
              ) : null}
            </div>

            <div className="Enrolled-date">Enrolled On: {data.enroll_date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

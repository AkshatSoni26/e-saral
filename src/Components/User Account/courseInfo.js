import React from "react";
import "./account.css";

export default function CourseInfo({
    ENROLLMENT_DATA,
    ICON_SIZE,
}) {
    const COURSE_SVG = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-cloud-off"
        >
            <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
    );

    console.log("ENROLLMENT_DATA", ENROLLMENT_DATA);

    return (
        <div>
            <div className="container ProCss">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={ICON_SIZE.width}
                        height={ICON_SIZE.height}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="BLACK"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-book-open"
                    >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                </div>

                <div className="statSty">My Courses</div>
            </div>

            {

                ENROLLMENT_DATA.map(
                    (data, index) => (

                        <div className="container userInfo">
                            <div>

                                <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"></img>

                            </div>

                            <div className="proPad">

                                <div className="userInfo">

                                    <div className="course-name">{data.course_name}</div>



                                    {
                                        (data.is_current === true) ?

                                            <div className="Enrolled">
                                                <p>enrolled</p>
                                            </div>

                                            :
                                            
                                            null
                                    }




                                </div>

                                <div className="Enrolled-date"> Enrolled On: {data.enroll_date} </div>

                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}

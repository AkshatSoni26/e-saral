import React from "react";
import './account.css'

export default function CourseInfo({ ENROLLMENT_DATA, ICON_SIZE }) {
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
            <div>
                



                <table >
                    <tbody>
                    
                        {

                            ENROLLMENT_DATA.map((data, index) => (
                                <tr key={index}>
                                    <td>{COURSE_SVG}</td>
                                    <tr>
                                    <div style={{paddingLeft: "10vw"}}>
                                        <td>
                                            <td>
                                                <table>

                                                

                                                    <td>
                                                        <strong>
                                                            <span>  {data.course_name}</span>
                                                        </strong>
                                                    </td>

                                                  

                                                
                                                        <td className="enroll"> 
                                                            <div className="Enrolled">
<b>
                                                            {data.is_current === true ? <p>enrolled</p> : null}
                                                            </b>
                                                            </div>

                                                        </td>
                                                   
                                                </table>

                                            </td>
                                        

                                            <div>Enrolled On: {data.enroll_date}</div>

                                        </td>

                                        </div>
                                    </tr>
                                    <br /><br />
                                </tr>

                            ))


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

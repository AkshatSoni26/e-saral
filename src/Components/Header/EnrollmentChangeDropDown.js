import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";

import HeaderDropDown from "./HeaderDropDown";

export default function EnrollmentChangeDropDown({ data, i, uData }) {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle tag="a" key={i} className="text-white">
          {data.course_name}
        </MDBDropdownToggle>

        <MDBDropdownMenu>
          {uData.enrollments.map((data2, j) => {
            return <>{<HeaderDropDown data={data} data2={data2} j={j} />}</>;
          })}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

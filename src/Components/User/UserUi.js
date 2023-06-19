// This is UI interface Component all UI part handle this.

import React, { useEffect } from "react";
import FacultiUi from "./FacultiUi";
import SubjectUi from "./SubjectUi";
import Header from "../Header/Header";

const UserUi = (props) => {
  console.log("props under the User UI", props.data);

  const enrollments = props.data.data.data.enrollments;

  const faculties = props.data.data.data.faculties;
  console.log(faculties);

  const profile = props.data.data.data.user;
  console.log("profile under the user ui", profile);

  const subjects = props.data.data.data.subjects;
  console.log(subjects[0].node_id);

  console.log("WE ARE NOW UNDER THE UserUi", props.data.data);

  useEffect(() => {
    const INFO = { profile: profile, enrollments: enrollments };

    const COND = INFO === JSON.parse(localStorage.getItem("info"));

    console.log("Condition for this", !COND);

    if (!localStorage.getItem("info")) {
      localStorage.setItem(
        "info",
        JSON.stringify({ profile: profile, enrollments: enrollments })
      );
      console.log("successfully update the data under the if block", props);
    } else if (!COND) {
      localStorage.removeItem("info");

      localStorage.setItem(
        "info",
        JSON.stringify({ profile: profile, enrollments: enrollments })
      );
    } else {
      const UdataFromSessionS = JSON.parse(localStorage.getItem("info"));
      console.log(
        "successfully update the data under the else block",
        UdataFromSessionS
      );
    }
  }, []);

  return (
    <>
      <Header />

      <section>
        <FacultiUi faculties={faculties} />
      </section>

      <section>
        <SubjectUi subjects={subjects} />
      </section>
    </>
  );
};

export default UserUi;

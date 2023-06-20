import React from "react";
import "./account.css";
import UserInfo from "./UserInfo";
import CourseInfo from "./courseInfo";
import Header from "../Header/Header";

export default function Profile() {
  const info = JSON.parse(localStorage.getItem("info"));
  const PROFILE_DATA = info.profile;

  console.log("PROFILE_data", info);
  const ENROLLMENT_DATA = info.enrollments;

  console.log("ENROLLMENT_DATA of Profile", ENROLLMENT_DATA);

  return (
    <div>
      <Header />

      <UserInfo PROFILE_DATA={PROFILE_DATA} />

      <CourseInfo ENROLLMENT_DATA={ENROLLMENT_DATA} />
    </div>
  );
}

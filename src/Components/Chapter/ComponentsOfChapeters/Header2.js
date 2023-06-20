import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import "../../CSS/Header.css";

import SubjectHeader from "../../Subject/SubjectHeader";
import Header2Tabs from "./Header2Tabs";

export default function Header2() {
  const location = useLocation();

  const data = location.state.defi;
  console.log("Header 2 data", data);

  console.log("location", location.state);

  console.log("moving from on tab to another tab and data is as", data);

  return (
    <>
      <SubjectHeader />

      <Header2Tabs data={data} />
    </>
  );
}

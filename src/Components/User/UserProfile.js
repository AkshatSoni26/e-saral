// This gives user data by using API. Basically Handle Data Handling Portion

import React, { useEffect, useState } from "react";
import axios from "axios";
import UserUi from "./UserUi";
import { useLocation, useNavigate } from "react-router-dom";

import { getGlobalVariable } from "../service folder/Service";
import SpinnerForLoad from "../Spinner";



const UserProfile = () => {
  const navigate = useNavigate();

  console.log("getGlobalVariable", getGlobalVariable());

  const CourseChange = getGlobalVariable();

  console.log("CourseChange", CourseChange.phase_id);

  const [data, setData] = useState({});

  const NEW_URL = "https://development.esaral.com/v2/users/home";

  console.log(data);

  const Auth_Token = localStorage.getItem("Access Key");

  const Headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + Auth_Token,
  };

  useEffect(() => {

    axios
      .post(
        NEW_URL,
        {
          switch_target_subcourse_id: CourseChange.subcourse_id,
          switch_phase_id: CourseChange.phase_id,
        },
        { headers: Headers }
      )
      .then((response) => {
        console.log(response);
        setData(response);

        if (response.status === 200) {
          console.log("response data for test ", response);
        } else {
          document.getElementById("user_id").innerHTML = "ERROR";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CourseChange]);

  useEffect(() => {
    if (!localStorage.getItem("Access Key")) {
      navigate("/login");
    }
  }, []);

  return !data.data ? (
    <SpinnerForLoad />
  ) : (
    <>
      {console.log("before UserUI", data)}
      <UserUi data={data} />
    </>
  );
};

export default UserProfile;

// This gives user data by using API. Basically Handle Data Handling Portion

import React, { useEffect, useState } from "react";
import axios from "axios";
import UserUi from "./UserUi";
import { useLocation, useNavigate } from "react-router-dom";

import { getGlobalVariable } from "../Service Folder/Service";
import SpinnerForLoad from "../Spinner/Spinner";
import { NetworkError, User_profile_Url } from "../URLS/Urls";


const UserProfile = () => {
  const navigate = useNavigate();

  console.log("getGlobalVariable", getGlobalVariable());

  const CourseChange = getGlobalVariable();

  console.log("CourseChange", CourseChange.phase_id);

  const [data, setData] = useState({});

  const [error, setError] = useState()

  const NEW_URL = User_profile_Url;

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
        if (error.message == "Network Error") {
            setError(error.message)  
        }
      });
  }, [CourseChange]);

  useEffect(() => {
    if (!localStorage.getItem("Access Key")) {
      navigate("/login");
    }
  }, []);

  return (!error) ?

  ((!data.data) ? (
    <SpinnerForLoad />
  ) : (
    <>
      {console.log("before UserUI", data)}
      <UserUi data={data} />
    </>
  ))
  :
  <img src={NetworkError} style={{marginTop:"15vh",
  marginLeft:"30vw"}} />
};

export default UserProfile;

// This gives user data by using API. Basically Handle Data Handling Portion

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserUi from "./UserUi"
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

    const navigate = useNavigate(); 

    useEffect(
        () => {
            if(localStorage.getItem("Access Key")){
                navigate("/", { state: localStorage.getItem("Access Key") })
            }
        }, []
    )

    const Auth_Token = localStorage.getItem("Access Key")
    const [data, setData] = useState({});

    const NEW_URL = "https://development.esaral.com/v2/users/home";

    console.log(data);

    const Headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Auth_Token
    };

    useEffect(() => {

        axios.post(NEW_URL,
            {
                "switch_target_subcourse_id": 0,
                "switch_phase_id": 0,
            },
            { headers: Headers }
        ).then(
            (response) => {
                console.log(response);
                setData(response);

                if (response.status === 200) {
                    console.log(response)
                }
                else {
                    document.getElementById("user_id").innerHTML = "ERROR";
                }
            }

        ).catch(
            error => {
                console.log(error);
            }
        )
    }
        , []
    );


    useEffect(
        () => {
            if(!localStorage.getItem("Access Key")){
                navigate("/login")
            }
        }, []
    )

    return (
        (!data.data) 
        ? 
        <div className = 'text-center' id = "user_id" > Loading...</div >
        :
        <UserUi  data = {data }/>   
    )

}

export default UserProfile;
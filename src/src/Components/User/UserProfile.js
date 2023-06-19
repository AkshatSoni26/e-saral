// This gives user data by using API. Basically Handle Data Handling Portion

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserUi from "./UserUi"
import { useLocation, useNavigate } from 'react-router-dom';

import { getGlobalVariable } from '../service folder/Service';
import Spinner from 'react-bootstrap/Spinner';

const UserProfile = () => {

    const navigate = useNavigate(); 

    // const location = useLocation();

    // console.log("location under the User profile", location.state)

    // const [ CourseChange , setCourseChange ] = useState ({
    //     "subcourse_id": 0,
    //     "phase_id": 0,
    // })

    console.log("getGlobalVariable", getGlobalVariable())

    const CourseChange = getGlobalVariable()

    console.log("CourseChange", CourseChange.phase_id)
    

    // useEffect (
    //     () => {        
    //         setCourseChange({
    //             "subcourse_id": location.state.subcourses_id, 
    //             "phase_id": location.state.phase_id,
    //         })
    //         console.log("{subcourse_id: location.state.subcourses_id, phase_id: location.state.phase_id,}", location )
    //     },[location.state]
    // )


        
    const [data, setData] = useState({});

    const NEW_URL = "https://development.esaral.com/v2/users/home";

    console.log(data);

    const Auth_Token = localStorage.getItem("Access Key")

    const Headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Auth_Token
    };



    useEffect(() => {

        // console.log("CourseChange.subcourse_id under the useEffect".CourseChange.subcourse_id,CourseChange.phase_id)

        axios.post(NEW_URL,
            {
                "switch_target_subcourse_id": CourseChange.subcourse_id,
                "switch_phase_id": CourseChange.phase_id,
            },
            { headers: Headers }
        ).then(
            (response) => {
                console.log(response);
                setData(response);
                

                if (response.status === 200) {
                    console.log("response data for test ",response)
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

        <div style={{marginTop:"50vh",
        marginLeft: "50vw"}}>
            
            <Spinner  animation="grow" />

        </div>
        :
        <>
        {console.log("before UserUI",data)}
        <UserUi  data = {data }/>   
        </>
    )

}

export default UserProfile;
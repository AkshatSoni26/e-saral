// This is UI interface Component all UI part handle this.


import React, { createContext, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Header';
import FacultiUi from './FacultiUi';
import SubjectUi from './SubjectUi';

import { isEqual } from 'lodash';


const header_data = createContext();

const UserUi = (props) => {

    console.log("props under the User UI", props.data)

    // console.log(props.data.data.data.enrollments)

    const enrollments = props.data.data.data.enrollments;
    // console.log('enrollments', props.data.data.data.enrollments)

    // const enrollment = enrollments.find(
    //     function isenroll(element) {
    //         return element.is_current === true
    //     }
    // )

    const faculties = props.data.data.data.faculties;
    console.log(faculties)

    const profile = props.data.data.data.user;
    console.log("profile under the user ui", profile)

    const subjects = props.data.data.data.subjects;
    console.log(subjects[0].node_id)


    console.log("WE ARE NOW UNDER THE UserUi", props.data.data)

    useEffect(() => {

        const INFO = { profile: profile, enrollments: enrollments }

        const COND = (INFO === JSON.parse(localStorage.getItem("info")))

console.log('Condition for this', !COND)



        if ( (!localStorage.getItem("info") ) )
        {
            localStorage.setItem("info", JSON.stringify({ profile: profile, enrollments: enrollments }));
            //   setUdata(props);
            console.log("successfully update the data under the if block", props);
        }
        
        else if (!COND) {

            // const item = localStorage.getItem('info');

            localStorage.removeItem('info')

            localStorage.setItem("info", JSON.stringify({ profile: profile, enrollments: enrollments }));


        }
        
        else {
            const UdataFromSessionS = JSON.parse(localStorage.getItem("info"));
            //   setUdata(UdataFromSessionS);
            console.log(
                "successfully update the data under the else block",
                UdataFromSessionS
            );
        }
    }, []);


    return (
        <>

            <Header />

            <FacultiUi faculties={faculties} />

            <SubjectUi subjects={subjects} />

        </>
    )
}


export default UserUi;


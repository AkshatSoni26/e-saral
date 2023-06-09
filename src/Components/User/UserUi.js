// This is UI interface Component all UI part handle this.


import React, { createContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Header';
import FacultiUi from './FacultiUi';
import SubjectUi from './SubjectUi';


const header_data = createContext();

const UserUi = (props) => {

    console.log("props", props.data)

    // console.log(props.data.data.data.enrollments)

    const enrollments = props.data.data.data.enrollments;
    // console.log('enrollments', props.data.data.data.enrollments)

    const enrollment = enrollments.find(
        function isenroll(element) {
            return element.is_current === true
        }
    )

    const faculties = props.data.data.data.faculties;
    console.log(faculties)

    const profile = props.data.data.data.user;
    console.log(profile)

    const subjects = props.data.data.data.subjects;
    console.log(subjects[0].node_id)


    return (
        <>

            <Header profile={profile} enrollment={enrollment} />
            
                <FacultiUi faculties={faculties} />

                <SubjectUi subjects={subjects} />
            
        </>
    )
}


export default UserUi;


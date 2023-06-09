// this is responsible for Subject data


import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ChapterData from '../Subject/Chapter Data/ChapterData'
import SideBar from 'C:/Users/eSaral/Documents/verification_login/src/Components/Subject/Side Bar/SideBar.js'
import 'C:/Users/eSaral/Documents/verification_login/src/Components/CSS/carsoul.css'

import { authFunction } from 'C:/Users/eSaral/Documents/verification_login/src/Components/Login I Logout/Logout.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import SubjectHeader from './SubjectHeader';





const URL = 'https://development.esaral.com/v2/contents/get-node-content-tree';


const context_data_1 = createContext();
const context_data_2 = createContext();

function SubjectData() {

    const [chapters, setChapter] = useState();

    let { state } = useLocation();
    console.log(state);

    const navigate = useNavigate();

    const [NodeIdStored, setNodeIdStored] = useState('');

    const Headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("Access Key")
    };

    useEffect(
        () => {

            axios.post(URL,
                {
                    "node_id": state.node_id
                },
                { headers: Headers }
            ).then(
                (response) => {
                    console.log(response);

                    if (response.status === 200) {
                        console.log('Subject Data', response)
                        setChapter(response.data.data)
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
        , []);


    useEffect(
        () => {
            if (!localStorage.getItem("Access Key")) {
                navigate('/login')
            }
        }
    )

    return (

        (!chapters)
            ?
            <div className='text-center' id="user_id" > Loading...</div >
            :
            <>

                <SubjectHeader />


                <div className="side">

                    <context_data_1.Provider value={chapters}>

                        <div id="menu">
                            <SideBar />
                        </div>

                    </context_data_1.Provider>


                    <div id="content">
                        {console.log(chapters)}
                        {(chapters.node_content_tree).map(

                            (response, i) => (
                                <div key={i}>
                                    <context_data_2.Provider value={{ response: response, key: i, id: i }}>

                                        <ChapterData />

                                    </context_data_2.Provider>
                                </div>
                            )
                        )}
                    </div>

                </div>
            </>
    )
};

export default SubjectData;

export { context_data_1, context_data_2 }; 
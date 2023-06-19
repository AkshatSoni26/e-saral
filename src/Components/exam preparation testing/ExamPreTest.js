import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import ChapterData from '../Subject/Chapter Data/ChapterData'
// import SideBar from './Side Bar/SideBar.js'
import '../CSS/carsoul.css'

// import SubjectHeader from './SubjectHeader';

const URL = 'https://development.esaral.com/v2/contents/get-node-content-tree';

export default function ExamPreTest() {

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
                    // console.log("exam preparation testing",response);

                    if (response.status === 200) {
                        console.log('exam preparation testing', response)
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
    <>

    {/* <Header /> */}

    Hey

    </>
  )
}

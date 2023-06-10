import { cardClasses } from '@mui/joy';
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'C:/Users/eSaral/Documents/verification_login/src/Components/CSS/Header.css'

// import { context_data_2 } from '../SubjectData';
import { useSelector } from 'react-redux';


import { ChapterData_1 } from './ChapterData';


export default function RevisepractiseButton() {

    // const  state = useSelector( state => state.data) // for taking data from redux store

    const navigate = useNavigate();                  

    const chapterData = useContext(ChapterData_1);

    const chapter_name = chapterData.display_name

    console.log("Revise Practics Test Button data", chapterData)

    return (

        <div id=' subject-button' >

            {/* {console.log('practise under button', value)} */}


            <a className='btn btn-outline-primary' onClick={() => navigate("/test", {
                state: {
                    chapterData: chapterData,
                    chapter_name: chapter_name,
                    ButtonClicked: "practise"
                }
            })
            } >
                practise
            </a>


            <a className='btn btn-outline-primary' onClick={
                () => navigate("/test", {
                    state: {
                        chapterData: chapterData,
                        chapter_name: chapter_name,
                        ButtonClicked: "revise"
                    }
                })
            }>
                revise
            </a>


            <a className='btn btn-outline-primary' onClick={
                () => navigate("/test", {
                    state: {
                        chapterData: chapterData,
                        chapter_name: chapter_name,
                        ButtonClicked: "test"
                    }
                })
            }>
                test
            </a>
        </div>

    )
};





// < 
//              href='/test'
//             style={{ paddingRight: "1px", paddingLeft: "1px", borderRightWidth: "1px", marginRight: 15, marginLeft: "30px", }}>
//             <button type="button" className="btn btn-outline-primary">
//                 <label style={{ paddingLeft: "50px", paddingRight: "78px", }}>test</label></button>
import { cardClasses } from '@mui/joy';
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'C:/Users/eSaral/Documents/verification_login/src/Components/CSS/Header.css'

import { context_data_2 } from '../SubjectData';


// const dataForButtons = createContext();


export default function RevisepractiseButton() {

    const navigate = useNavigate();                  

    const chapterData = useContext(context_data_2);

    console.log("RevisePractics Button", chapterData)


    return (

        <div id='button' >

            {/* {console.log('practise under button', value)} */}


            <a onClick={() => navigate('/test', { state:  {chapterData:chapterData,defi:'practise'}}) }>
                practise
            </a>

            <a onClick={() => navigate('/test', { state: {chapterData:chapterData,defi:'revise'}})}>
                revise
            </a>

            <a onClick={() => navigate('/test', { state: {chapterData:chapterData,defi:'test'}})}>
                test
            </a>
        </div>

    )
}




// < 
//              href='/test'
//             style={{ paddingRight: "1px", paddingLeft: "1px", borderRightWidth: "1px", marginRight: 15, marginLeft: "30px", }}>
//             <button type="button" className="btn btn-outline-primary">
//                 <label style={{ paddingLeft: "50px", paddingRight: "78px", }}>test</label></button>
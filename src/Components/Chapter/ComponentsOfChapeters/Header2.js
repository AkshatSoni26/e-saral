import React, { useContext, useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { authFunction } from 'C:/Users/eSaral/Documents/verification_login/src/Components/Login I Logout/Logout.js';
import { useLocation, useNavigate } from 'react-router-dom';
import 'C:/Users/eSaral/Documents/verification_login/src/Components/CSS/Header.css'

import SubjectHeader from '../../Subject/SubjectHeader';

import { ChapterData_1 } from '../../Subject/Chapter Data/ChapterData';

import Learn from '../Pages/Learn';
import Practice from '../Pages/Practice';
import Revise from '../Pages/Revise';
import Test from 'C:/Users/eSaral/Documents/verification_login/src/Components/Chapter/Pages/Test.js';


export default function Header2() {

    // const data = useContext(ChapterData_1)

    // const [dataState, setDataState] = useState('learn');

    const navigate = useNavigate();


    // const navigate = useNavigate()
    const location = useLocation();

    const data = location.state.defi
    console.log("Header 2 data", data)

    console.log("location", location.state)

    // useEffect(
    //     () => {
    //         setDataState(location.state.defi)
    //     }, []
    // )

    function TabChange(a) {
        
        // const ButtonClicked = a

        const data = JSON.parse(sessionStorage.getItem('chapter data'))

        data["ButtonClicked"] = a

        console.log('testing data is work properly or not',data)

        navigate('/Content', {
            state: data
        }
        ) 

        console.log('moving from on tab to another tab and data is as', data )} 
    
    



    return (
        <>

            <SubjectHeader />

            <div className='header1'>

                <div className='heading'>

                    <a className='button_effect' onClick={ () => TabChange('learn') }>
                        Learn
                    </a>

                    <a className='button_effect' onClick={() => TabChange('practise')}>
                        Practice
                    </a>

                    <a className='button_effect' onClick={() => TabChange('revise')}>
                        Revise
                    </a>

                    <a className='button_effect' onClick={() => TabChange('test')}>
                        Test
                    </a>

                    {/* {
                        (dataState === 'learn') &&

                        <div id='Button-info'>  {dict['learn']} </div>

                    }

                    {
                        (dataState === 'practice') &&

                        <div id='Button-info'>  {dict['practice']}</div>

                    }

                    {
                        (dataState === 'revise') &&

                        <div id='Button-info'> {dict['revise']}</div>

                    }

                    {
                        (dataState === 'test') &&

                        <div id='Button-info'>  {dict['test']} </div>

                    } */}



                </div>
            </div>

        </>
    )
}

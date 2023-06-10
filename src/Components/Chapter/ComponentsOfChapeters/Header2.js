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
import Test from '../Pages/Test';


export default function Header2() {

    // const data = useContext(ChapterData_1)

    const [dataState, setDataState] = useState('learn');

    
    // const navigate = useNavigate()
    const location = useLocation();
    
    const data = location.state.defi
    console.log("Header 2 data", data)

    console.log("location", location.state)

    useEffect(
        () => {
            setDataState(location.state.defi)
        }, []
    )



    return (
        <>

            <SubjectHeader />

            <div className='header1'>

                <div className='heading'>

                    <a className='button_effect' onClick={() => console.log(' learn Button clicked')}>
                        Learn
                    </a>

                    <a className='button_effect' onClick={() => console.log(' practise Button clicked')}>
                        Practice
                    </a>

                    <a className='button_effect' onClick={() => console.log(' revise Button clicked')}>
                        Revise
                    </a>

                    <a className='button_effect' onClick={() =>console.log(' test Button clicked')}>
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

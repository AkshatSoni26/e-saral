import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { authFunction } from './Login I Logout/Logout';
import { header_data } from './User/UserUi';
import '../Components/CSS/Header.css'

export default function Header(props) {

    console.log(props)

    const navigate = useNavigate();

    const [uData, setUdata] = useState();


    console.log('data of Header',props)

    useEffect(
        () => {

    if (!sessionStorage.getItem('info')) {
        
        const EnrollAndProf = sessionStorage.setItem('info',JSON.stringify(props))

        const info = {c_name : props.enrollment.course_name, 
            u_name : props.profile.full_name}

        setUdata(info)
    }

    else {
        const UdataFromSessionS = JSON.parse(sessionStorage.getItem('info'))
        
        const info = {c_name : UdataFromSessionS.enrollment.course_name, 
            u_name : UdataFromSessionS.profile.full_name}

        setUdata(info)
    }
}, []
    )

    return (

        (!uData) ? 

        <div>Loading . . . </div>

        :

        <div className='sticky'>

            <Navbar className="text-light" bg="dark" expand="lg">

                <Container>

                    <Navbar.Brand className='text-light'>e-saral</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="me-auto">
                            <Nav.Link  className='text-light'   href="/login" onClick={() => { authFunction.Logout(navigate) }}>Logout</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>

                    <div style={{ paddingLeft: 100 }} > 
                        <h3>{uData.c_name}</h3>
                        <b>Hi, {uData.u_name} 👋 </b>
                    </div>

                    <Nav.Link  className='text-light'   href="/login" onClick={() => { authFunction.Logout(navigate) }}>Logout</Nav.Link>

                </Container>
            </Navbar>

        </div>
    )
}


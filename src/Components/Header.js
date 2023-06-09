import React from 'react';
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

    return (
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
                        <h3>{props.enrollment.course_name}</h3>
                        <b>Hi, {props.profile.full_name} 👋 </b>
                    </div>

                    <Nav.Link  className='text-light'   href="/login" onClick={() => { authFunction.Logout(navigate) }}>Logout</Nav.Link>

                </Container>
            </Navbar>

        </div>
    )
}


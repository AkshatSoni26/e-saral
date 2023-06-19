import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { authFunction } from '../Login I Logout/Logout';
import { useNavigate } from 'react-router-dom';
import '../CSS/Header.css'
import Header from '../Header';


export default function SubjectHeader() {

    const navigate = useNavigate();
    const header_style = {marginLeft: "1000px"}

    return (

        <Header />

        // <div className='sticky '>
        //     <Navbar bg="dark" expand="lg">

        //         <Container>

        //             <Navbar.Brand className='text-light' href="/">e-saral</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="btn">

        //                     <Nav.Link style={header_style} className='text-light' href="/" >Home</Nav.Link>

        //                     <Nav.Link className='text-light' href="/login" onClick={() => { authFunction.Logout(navigate) }}>Logout</Nav.Link>


        //                 </Nav>
        //             </Navbar.Collapse>

        //         </Container>
        //     </Navbar>
        // </div>
    )
}

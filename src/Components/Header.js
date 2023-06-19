import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { authFunction } from "./Login I Logout/Logout";
import { header_data } from "./User/UserUi";
import "../Components/CSS/Header.css";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

import { setGlobalVariable } from "./service folder/Service";
import Spinner from 'react-bootstrap/Spinner';

export default function Header() {
  console.log();

  const navigate = useNavigate();

  const [uData, setUdata] = useState();

  // const uData =JSON.parse(localStorage.getItem('info'))

  console.log("uData", uData)

  useEffect(

    () => {

      setTimeout(
        () => {
          
          setUdata(JSON.parse(localStorage.getItem('info')))
          
        }, 1
      )
    }
    , []
  )


  function testing(phase_id, subcourse_id) {

    setGlobalVariable({
      "subcourse_id": subcourse_id,
      "phase_id": phase_id,
    });
 
    navigate('/')
    window.location.reload();

  }


  return !uData ? (

    <div style={{marginTop:"50vh",
        marginLeft: "50vw"}}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>

  ) : (
    <div>
      <div className="sticky">
        <Navbar className="text-light" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="text-light">
              e-saral
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="me-auto">
                            <Nav.Link  className='text-light'   href="/login" onClick={() => { authFunction.Logout(navigate) }}>Logout</Nav.Link>
                        </Nav> */}
            </Navbar.Collapse>

            <div style={{ paddingLeft: 100 }}>
              <h3>
                {uData.enrollments.map((data, i) => {
                  if (data.is_current == true) {

                    return (
                      <>
                        {console.log("length of subcourses", (data.subcourses).length)}
                        <MDBDropdown >

                          <MDBDropdownToggle tag='a' key={i} className="text-white">
                            {data.course_name}
                          </MDBDropdownToggle>

                          <MDBDropdownMenu >

                            {uData.enrollments.map((data2, j) => {
                              return (
                                <>

                                  {
                                    <div>
                                      {
                                        (((data.subcourses).length) == 1)

                                          ?
                                          <>
                                            {console.log("{ phase_id: data.phase_id, subcourses_id: data.subcourses[0].id }", { phase_id: data2.phase_id, subcourses_id: data2.subcourses[0].id })}

                                            <a className="btn dropHeader1" key={j}

                                              // onClick={() => console.log("phase_id, subcourses" ,data2.phase_id, data2.subcourses[0].id)}

                                              onClick={() => testing(data2.phase_id, data2.subcourses[0].id)}


                                            > {data2.course_name}
                                              {(data2.is_current == true) ? <p className="curr">(current)</p> : null}</a>
                                          </>
                                          :
                                          <>
                                            <div className="dropHeader">{data2.course_name}</div>

                                            {(data2.subcourses).map(
                                              (data1, k) => {
                                                return (
                                                  <div className="dropCurr">

                                                    <a className="btn dropHeader1 dropHeader2" tag='a' key={k}


                                                      onClick={() => { testing( data2.phase_id, data1.id );
                                                     } }
                                                    >{data1.name}



                                                      {console.log("{ phase_id: data.phase_id, subcourses_id: data.subcourses.id }", { phase_id: data2.phase_id, subcourses_id: data1.id })}


                                                      {(data1.is_current == true) ? <p className="curr">(current)</p> : null} </a>

                                                  </div>
                                                )
                                              }
                                            )}
                                          </>
                                      }

                                    </div>
                                  }
                                </>
                              )
                            }
                            )
                            }
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </>

                    )
                  }
                }
                )
                }
              </h3>

              <b>Hi, {uData.profile.full_name} 👋 </b>
            </div>

            <Nav.Link
              className="text-light"
              href="/login"
              onClick={() => {
                authFunction.Logout(navigate);
              }}
            >
              Logout
            </Nav.Link>

            <Nav.Link
              className="text-light"
              onClick={() => navigate("/profile")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="profile"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  transform="translate(4 2.5)"
                >
                  <circle cx="7.579" cy="4.778" r="4.778"></circle>
                  <path d="M5.32907052e-15,16.2013731 C-0.00126760558,15.8654831 0.0738531734,15.5336997 0.219695816,15.2311214 C0.677361723,14.3157895 1.96797958,13.8306637 3.0389178,13.610984 C3.81127745,13.4461621 4.59430539,13.3360488 5.38216724,13.2814646 C6.84083861,13.1533327 8.30793524,13.1533327 9.76660662,13.2814646 C10.5544024,13.3366774 11.3373865,13.4467845 12.1098561,13.610984 C13.1807943,13.8306637 14.4714121,14.270023 14.929078,15.2311214 C15.2223724,15.8479159 15.2223724,16.5639836 14.929078,17.1807781 C14.4714121,18.1418765 13.1807943,18.5812358 12.1098561,18.7917621 C11.3383994,18.9634099 10.5550941,19.0766219 9.76660662,19.1304349 C8.57936754,19.2310812 7.38658584,19.2494317 6.19681255,19.1853548 C5.92221301,19.1853548 5.65676678,19.1853548 5.38216724,19.1304349 C4.59663136,19.077285 3.8163184,18.9640631 3.04807112,18.7917621 C1.96797958,18.5812358 0.686515041,18.1418765 0.219695816,17.1807781 C0.0745982583,16.8746908 -0.000447947969,16.5401098 5.32907052e-15,16.2013731 Z"></path>
                </g>
              </svg>
            </Nav.Link>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

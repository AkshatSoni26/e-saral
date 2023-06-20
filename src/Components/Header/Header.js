import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../../Components/CSS/Header.css";

import SpinnerForLoad from "../Spinner/Spinner";
import NameAndDropDownHandler from "./NameAndDropDownHandler";
import CompanyLogo from "./CompanyLogo";
import HeaderLogout from "./HeaderLogout";
import { HeaderSvg } from "../SVGs/Svgs";

export default function Header() {
  console.log();

  const navigate = useNavigate();

  const [uData, setUdata] = useState();

  console.log("uData", uData);

  useEffect(() => {
    setTimeout(() => {
      setUdata(JSON.parse(localStorage.getItem("info")));
    }, 1);
  }, []);

  return !uData ? (
    <SpinnerForLoad />
  ) : (
    <header id="shadow-effect">
      <div className="sticky">
        <Navbar className="text-light" bg="dark" expand="lg">
          <Container>
            <CompanyLogo />

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />

            <NameAndDropDownHandler uData={uData} />

            <HeaderLogout />


            <Nav.Link
              className="text-light"
              onClick={() => navigate("/profile")}
            >
              {HeaderSvg}
          
            </Nav.Link>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

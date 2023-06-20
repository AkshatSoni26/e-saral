import React from 'react'
import { authFunction } from '../Login I Logout/Logout';
import Nav from "react-bootstrap/Nav";
import { useNavigate } from 'react-router-dom';


export default function HeaderLogout() {
    const navigate = useNavigate();
    
  return (
    <div>
        <Nav.Link
              className="text-light"
              href="/login"
              onClick={() => {
                authFunction .Logout(navigate);
              }}
            >
              Logout
            </Nav.Link>
    </div>
  )
}

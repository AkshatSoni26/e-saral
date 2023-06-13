import React from 'react'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
    
    <Link to="/login/check"></Link>
    <Link to="/"></Link>
    <Link to="/:subjectName"></Link>

    <Link to="/Content"></Link>

    <Link to="/profile"></Link>

    </>
  )
}

export default Links;
import React from 'react'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
    
    <Link to="/login/check"></Link>
    <Link to="/"></Link>
    <Link to="/:subjectName"></Link>

    {/* <Link to="/practise"></Link>
    <Link to="/revise"></Link> */}
    <Link to="/test"></Link>

    {/* <Link to="/*"></Link> */}

    </>
  )
}

export default Links;
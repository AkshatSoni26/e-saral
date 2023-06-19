import React from 'react'
import Spinner from "react-bootstrap/Spinner";

export default function SpinnerForLoad() {
  return (
    <div style={{ marginTop: "50vh", marginLeft: "50vw" }}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  )
}

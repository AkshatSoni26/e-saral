import React from 'react'
import {ComingSoonUrls} from './Urls'

export default function ComingSoon() {
  return (
    <img
    src= {ComingSoonUrls}
    className="img-fluid"
      style={{
        // paddingTop: "100px",
        // paddingLeft: "550px",
        marginLeft: "40vw",
        height: '20%',
        width: "20%"
      }}
    />
  )
  
}

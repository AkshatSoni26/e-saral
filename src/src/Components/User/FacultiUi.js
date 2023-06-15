// Gives Faculti UI part 

import React from 'react'
import FacultiSlider from './FacultiSlider'

export default function FacultiUi({ faculties }) {

  const pad = {
    marginLeft: "200px",
    marginTop: "40px",
  
  }


  return (
    <div className="album py-5 bg-light" paddingTop>
      <div className="container" style={pad}  >
        <div className="row zoom-effect">
          {
            <FacultiSlider faculties={faculties} />
            

          }
        </div>
      </div>
    </div>
  )
}

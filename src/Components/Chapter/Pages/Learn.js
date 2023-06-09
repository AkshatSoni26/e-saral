import React, { useContext} from 'react'


import { useLocation } from 'react-router-dom'

import './Learn.css'

// import { ChapterData_1 } from '../../Subject/Chapter Data/ChapterData'

import { context_data_2 } from '../../Subject/SubjectData'

export default function Learn() {

  const location = useLocation()

  // const data = useContext(context_data_2)

  console.log('In Learn portion', location.state.data.content.learn  )

  const learn_data = location.state.data.content.learn 


  // console.log('state - learn', location.state.chapter_data[0].content_data.content_info.thumbnail)

  return (
    <>
    {/* <div>
      Learn
      
    </div> */}

      <div >
        <div className='container-fluid'>
          <div className='row gy-4 ' >
            {
              learn_data.map(
                (data, index) => {
                  return (
                    // <li key={index}> {data.display_name}</li>

                    <div className='col-xl-3 col-lg-4 col-md-6'>
                      <div className='gallery-item h-100'>
                        <div  >
                          <img src={ data.content_data.content_info.thumbnail} className="img-fluid" alt="" />
                        {data.display_name}
                        {console.log('data',data.content_data.content_info.thumbnail)}
                        </div>
                      </div>
                    </div>

                  )
                }
              )
            } 
            

          </div>
        </div>
      </div >

    </>
  )
}

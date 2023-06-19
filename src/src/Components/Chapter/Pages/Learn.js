import React, { useContext } from 'react'


import { useLocation } from 'react-router-dom'

import './Learn.css'

// import { ChapterData_1 } from '../../Subject/Chapter Data/ChapterData'

import { context_data_2 } from '../../Subject/SubjectData'
import ScrollBAr from '../ComponentsOfChapeters/ScrollBAr'



export default function Learn() {

  const dataFromSession = localStorage.getItem("chapter data") // Taking data from storage

  const dataConver = JSON.parse(dataFromSession) // Converting data from json to Object

  console.log("we are under the Learn components", dataConver.chapterData.content.learn)

  const learn_data = dataConver.chapterData.content.learn


  return (
      
    <div>

      

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
                          <img src={data.content_data.content_info.thumbnail} className="img-fluid" alt="" />
                        {data.display_name}
                          {console.log('data', data.content_data.content_info.thumbnail)}
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

    </div>
  )
}

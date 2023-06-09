import React from 'react'
// import PagesHeader from '../ComponentsOfChapeters/PagesHeader'
import { useLocation } from 'react-router-dom'

import SubjectHeader from '../../Subject/SubjectHeader';
import Header2 from '../ComponentsOfChapeters/Header2';

export default function Test() {

  const location = useLocation();

  console.log("revise", location.state.data.content.test)

  const test_data = location.state.data.content.test

  return (
    <>
   <div>
    Test
    </div> 

    <div>
      {
        test_data.map(
          (item_1,i) =>
          {
            return (
              // console.log("item_1", item_1)
              (item_1.content_data).map(
                (item_2,j) => 
                {
                  return (
                  
                  <>

                  {console.log("item_2",item_2)}
                  
                  <h1> { item_2.display_name } </h1>
                  <h6> { item_2.description } </h6>
                  
                  </>

                  )
                }
              )
              
            )
          }
        )
      }
    </div>

    </>
  )
}

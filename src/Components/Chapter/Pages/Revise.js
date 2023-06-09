import React from 'react'
// import PagesHeader from '../ComponentsOfChapeters/PagesHeader'
import { useLocation } from 'react-router-dom'

import SubjectHeader from '../../Subject/SubjectHeader';
import Header2 from '../ComponentsOfChapeters/Header2';

export default function Revise() {

  const location = useLocation();
  console.log("revise", location.state.data.content.revise)

  const revise_data = location.state.data.content.revise

  return (

    <>

      <div>
        Revise
      </div>

      <div>

        {
          revise_data.map(
            (item_1, i) => {
              return (
                // console.log("item_1",item_1)
                (item_1.content_data).map(
                  (item_2, j) => {
                    return (
                      <>
                        <h1> {item_2.display_name} </h1>

                        {console.log('item_2.sheet_content', item_2.sheet_content)}

                        {
                          (item_2.sheet_content).map(
                            (item_3, k) => {
                              return (
                                <div>
                                  <h2>{item_3.display_name}</h2>

                                  {console.log('item_3', item_3)}

                                  {
                                    (item_3.content_data.content_type == "PDF")

                                      ?

                                      <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png" alt={item_3.content_data.content_info.name} />
                                        <h4>{item_3.content_data.content_info.name}</h4>
                                      </div>

                                      :
                                      <>
                                        <img src={item_3.content_data.content_info.thumbnail} />
                                        <h5>{item_3.content_data.content_info.name}</h5>
                                      </>
                                  }

                                </div>
                              )
                            }
                          )
                        }



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

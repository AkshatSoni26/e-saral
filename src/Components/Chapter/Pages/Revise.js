import React from 'react'
// import PagesHeader from '../ComponentsOfChapeters/PagesHeader'
import { useLocation } from 'react-router-dom'

import SubjectHeader from '../../Subject/SubjectHeader';
import Header2 from '../ComponentsOfChapeters/Header2';

export default function Revise() {

  const dataFromSession = sessionStorage.getItem("chapter data") // Taking data from storage

  const dataConver = JSON.parse(dataFromSession) // Converting data from json to Object

  console.log("we are under the revise components", dataConver.chapterData.content.revise  )

  const revise_data = dataConver.chapterData.content.revise

  return (

    <>

      {/* <div>
        Revise
      </div> */}

      <div>

        {
          revise_data.map(
            (item_1, i) => {
              return (
                // console.log("item_1",item_1)
                (item_1.content_data).map(
                  (item_2, j) => {
                    return (

                      <div class="container-fluid" > 
                      <div class="row gy-4 justify-content-center" >
                        <h1> {item_2.display_name} </h1>

                        {console.log('item_2.sheet_content', item_2.sheet_content)}

                        {
                          (item_2.sheet_content).map(
                            (item_3, k) => {
                              return (
                                <div class="col-xl-3 col-lg-4 col-md-6" >
                                  {/* <h2>{item_3.display_name}</h2> */}

                                  {console.log('item_3', item_3)}

                                  {
                                    (item_3.content_data.content_type == "PDF")

                                      ?

                                      <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png" 
                                        alt={item_3.content_data.content_info.name} className="img-fluid" />

                                        <p>{item_3.content_data.content_info.name}</p>
                                      </div>

                                      :
                                      <>
                                        <img src={item_3.content_data.content_info.thumbnail} className="img-fluid" />
                                        <p>{item_3.content_data.content_info.name}</p>
                                      </>
                                  }

                                </div>
                              )
                            }
                          )
                        }
</div>


                      </div>

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

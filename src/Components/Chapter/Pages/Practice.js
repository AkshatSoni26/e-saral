import React, { useContext } from 'react'


export default function Practice() {

  const dataFromSession = sessionStorage.getItem("chapter data") // Taking data from storage

  const dataConver = JSON.parse(dataFromSession) // Converting data from json to Object

  console.log("we are under the Learn components", dataConver.chapterData.content.practise)

  const practise_data = dataConver.chapterData.content.practise



  return (
    <>

      {/* <div>Practics</div> */}

      <div>
        {
          practise_data.map(
            (item_1, i) => {

              {
                return (

                  (item_1.content_data).map(

                    (item_2, j) => {

                      return (

                        <div>

                          <h2>{item_2.display_name}</h2>

                          {/* {console.log("item_2.display_name", item_2.display_name)}

                          {console.log('item_2.sheet_content', item_2.sheet_content)} */}

                          {
                            (item_2.sheet_content).map(
                              (item_3, k) => {
                                return (

                                  <div>
                                    {/* <h2>item_2.display_name {item_3.display_name}</h2> */}
                                    {/* <h5> item_2.description {item_3.description}</h5>  */}

                                    <h4>{item_3.display_name}</h4>
                                    <p>{item_3.description}</p>


                                    {console.log('item_3', item_3)}

                                    {
                                      (item_3.content_data.content_type == "PDF")

                                        ?

                                        <div>
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png" alt={item_3.content_data.content_info.name} />
                                          <p>{item_3.content_data.content_info.name}</p>
                                        </div>

                                        :
                                        <>
                                          <img src={item_3.content_data.content_info.thumbnail} />
                                          <h5>{item_3.content_data.content_info.name}</h5>
                                        </>
                                    }
                                    <br />
                                  </div>

                                )
                              }
                            )

                          }

                          <br /><br /><br />

                        </div>


                      )

                    }
                  )


                )
              }

            }
          )
        }

      </div>

    </>
  )
}

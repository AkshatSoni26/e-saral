import React from 'react';
import { useLocation } from 'react-router-dom';
import SubjectHeader from '../../Subject/SubjectHeader';
import Header2 from '../ComponentsOfChapeters/Header2';

export default function TestPage() {
  const dataFromSession = localStorage.getItem('chapter data'); // Taking data from storage
  const dataConver = JSON.parse(dataFromSession); // Converting data from JSON to object

  console.log('we are under the revise components', dataConver.chapterData.content.revise);

  const test_data = dataConver.chapterData.content.test;

  console.log('test data from test page', test_data);

  return (
    <>
      { ( (test_data.length ==1) && !(test_data.content_data) )  ? (
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8PR0ho9yYxHdvd3jNy8Cm6dl_EOi_WdXLNHEHb7O&s"
          className="img-fluid"
          style={{
            paddingTop: '100px',
            paddingLeft: '550px',
          }}
        />
      ) : (
        <>
          <div>
            {test_data.map((item_1, i) => {
              console.log('item_1 in test page', item_1);

              return (
                <div key={i}>
                  {item_1.content_data.map((item_2, j) => {
                    console.log('item 2', item_2);
                    return (


                      <div className="container" >
                        <div className="row" >

                          <div className="col-md-10">
                            <h3 className='text-dark'> {item_2.display_name} </h3>
                          </div>


                          <div className='col-md-2'>
                            <button className='btn btn-primary text-right'>Start Test</button>
                          </div>
                        </div>

                        {/* {console.log("item_2.content_data.content_info.content_info",item_2)} */}
                        {/* {item_2.content_data.content_info.instructions} */}

                        {/* <div dangerouslySetInnerHTML={{__html: item_2.content_data.content_info.instructions}} />  */}


                      </div>


                    )
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}



 
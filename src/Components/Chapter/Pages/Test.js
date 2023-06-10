import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Learn from './Learn';
import Practice from './Practice';
import Revise from './Revise';
// import TestPage from './TestPage';


export default function Test() {

  const location = useLocation();

  console.log("Under the Test Page")

  const [data, setData] = useState();


  useEffect(
    () => {

      const NotHaveStore = (!sessionStorage.getItem('chapter data'))
      const NullCond = (sessionStorage.getItem('chapter data') == null)
      const UndifCond = ((sessionStorage.getItem('chapter data') == undefined))

      const IfStatCondition = (NotHaveStore || NullCond || UndifCond)

      // Storing data
      if (IfStatCondition) {
        console.log("I am in the Test page and data is", location.state)

        setData(location.state)
        // setButtonInfo(data.ButtonClicked)


        sessionStorage.setItem('chapter data', JSON.stringify(location.state))
        console.log(location.state)
      }

      //Updating Data
      else if ( (((JSON.parse(sessionStorage.getItem("chapter data"))).chapter_name) != location.state.chapter_name) || 
      (((JSON.parse(sessionStorage.getItem("chapter data"))).ButtonClicked) != location.state.ButtonClicked) ) {
        sessionStorage.removeItem("chapter data")
        console.log('item is remove and now updatng data ')
        console.log(" else if porion is run", location.state)

        setData(location.state)
        // setButtonInfo(data.ButtonClicked)

        sessionStorage.setItem('chapter data', JSON.stringify(location.state));
      }

      // Taking Data
      else {
        const DataFromSessionStorage = sessionStorage.getItem('chapter data')

        setData(JSON.parse(DataFromSessionStorage))
        // setButtonInfo(data.ButtonClicked)

        console.log("Taking data from the session storage", JSON.parse(DataFromSessionStorage))

      }
    }, [location]
  )



  return (
   <div>

      {
        
        (!data) ? 
        
        (<div>Loading...</div>)
:
                  
                  <>

{data.ButtonClicked == 'header' && <Learn />}
                  
{data.ButtonClicked == 'practise' && <Practice />}

{ data.ButtonClicked == "revise" && <Revise /> }

 {/* {data.ButtonClicked == 'test' && <TestPage />} */}
                  
                  </>

              

          }

    </div>
  );
};



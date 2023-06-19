import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Learn from './Learn';
import Practice from './Practice';
import Revise from './Revise';
import TestPage from './TestPage'
import Header2 from '../ComponentsOfChapeters/Header2';
import ScrollBAr from '../ComponentsOfChapeters/ScrollBAr';
// import TestPage from './ContentPage';

import '../../CSS/carsoul.css'
import Spinner from 'react-bootstrap/Spinner';




export default function Test() {

  const location = useLocation();

  console.log("Under the Test Page")

  const [data, setData] = useState();


  useEffect(
    () => {

      const NotHaveStore = (!localStorage.getItem('chapter data'))
      const NullCond = (localStorage.getItem('chapter data') == null)
      const UndifCond = ((localStorage.getItem('chapter data') == undefined))

      const IfStatCondition = (NotHaveStore || NullCond || UndifCond)

      // Storing data
      if (IfStatCondition) {
        console.log("I am in the Test page and data is", location.state)

        setData(location.state)
        // setButtonInfo(data.ButtonClicked)


        localStorage.setItem('chapter data', JSON.stringify(location.state))
        console.log(location.state)
      }

      //Updating Data
      else if ((((JSON.parse(localStorage.getItem("chapter data"))).chapter_name) != location.state.chapter_name) ||
        (((JSON.parse(localStorage.getItem("chapter data"))).ButtonClicked) != location.state.ButtonClicked)) {
        localStorage.removeItem("chapter data")
        console.log('item is remove and now updatng data ')
        console.log(" else if porion is run", location.state)

        setData(location.state)
        // setButtonInfo(data.ButtonClicked)

        localStorage.setItem('chapter data', JSON.stringify(location.state));
      }

      // Taking Data
      else {
        const DataFromlocalStorage = localStorage.getItem('chapter data')

        setData(JSON.parse(DataFromlocalStorage))
        // setButtonInfo(data.ButtonClicked)

        console.log("Taking data from the session storage", JSON.parse(DataFromlocalStorage))

      }
    }, [location]
  )



  return (

    (!data) ?
<div style={{marginTop:"50vh",
        marginLeft: "50vw"}}>
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
      :

      <div>
        <div>
          <Header2 />
        </div>


        <div className='chapter-components'>



          {data.ButtonClicked == 'learn' && <Learn />}

          

          {data.ButtonClicked == 'practise' && <Practice />}

          {data.ButtonClicked == "revise" && <Revise />}

          {data.ButtonClicked == 'test' && <TestPage />}

        </div>
        
      </div>
  );
};



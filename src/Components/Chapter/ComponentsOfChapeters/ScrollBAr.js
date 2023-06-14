import React, { useContext, useState } from 'react';
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import "rsuite/dist/rsuite.css"
import { Link } from 'react-router-dom';
import HoveringEffectInSideBar from 'C:/Users/eSaral/Documents/verification_login/src/Components/Subject/Side Bar/HoveringEffectInSideBar.js';
// import { context_data_1 } from '../../Subject/SubjectData';
import '../../CSS/App.css'



export default function ScrollBAr() {

  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');

  // const chapters = useContext(context_data_1);

  // function handleChange(i) {
  //   const element = document.getElementById(`chapter-${i}`);
  //   console.log(element)
  //   element.scrollIntoView();
  // }

  return (
    <div>

<div >
      <Sidenav expanded={expanded} >
        <Sidenav.Body >
          <Nav activeKey={activeKey} onSelect={setActiveKey}>

            {/* {
              (chapters.node_content_tree).map(
                (response, i) => (
                  // <div key={i}>

                  <Nav.Item onClick={() => handleChange(i)} style={{paddingLeft: "20px"}}>

                    <HoveringEffectInSideBar display_name = {response.display_name} />
  
                  </Nav.Item>
                  // </div>
                )
              )
            } */}

            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />}>
                User Group
              </Nav.Item>
            <Nav.Menu placement="rightStart" eventKey="3" title="Chapters" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                {/* {
                    (chapters.node_content_tree).map(
                        (response, i) => (                            
                           <Nav.Item eventKey={`#chapter-${i}`}>
                            {
                              (((response.display_name).length) > 7)
                              ? 
                              ((response.display_name).slice(0,7)+"...")   
                              : 
                              ((response.display_name))
                            }     
                                            </Nav.Item>              
                        )
                    ) 
                } */}

                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
            <Nav.Menu
                placement="rightStart"
                eventKey="4"
                title="Settings"
                icon={<GearCircleIcon />}
              >
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>

    </div>
  )
}





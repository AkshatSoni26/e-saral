import React, { useContext, useState } from "react";
import { Sidenav, Nav, Toggle } from "rsuite";
import "rsuite/dist/rsuite.css";
import HoveringEffectInSideBar from "./HoveringEffectInSideBar";
import { context_data_1 } from "../SubjectData.js";
import "../../CSS/App.css";

export default function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const chapters = useContext(context_data_1);

  function handleChange(i) {
    const element = document.getElementById(`chapter-${i}`);
    console.log(element);
    element.scrollIntoView();
  }

  return (
    <div>
      <Sidenav expanded={expanded}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            {chapters.node_content_tree.map((response, i) => (
              <Nav.Item
                onClick={() => handleChange(i)}
                style={{ paddingLeft: "20px" }}
              >
                <HoveringEffectInSideBar display_name={response.display_name} />
              </Nav.Item>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

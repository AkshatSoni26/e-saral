import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header2Tabs() {
  const navigate = useNavigate();

  function TabChange(a) {
    const data = JSON.parse(localStorage.getItem("chapter data"));

    data["ButtonClicked"] = a;

    console.log("testing data is work properly or not", data);

    navigate("/Content", {
      state: data,
    });
  }

  const TabObjct = ["learn", "practise", "revise", "test"];

  return (
    <div>
      <div className="header1">
        <div className="heading">
          {TabObjct.map((ObjectValue, index) => {
            return (
              <a
                key={index}
                className="button_effect"
                onClick={() => TabChange(ObjectValue)}
              >
                {ObjectValue.charAt(0).toUpperCase() + ObjectValue.slice(1)}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

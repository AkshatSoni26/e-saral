import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExamPrepTargetingComp({ subject }) {
  const navigate = useNavigate();
  return (
    <div>
      {console.log("node_id.display_name", subject)}
      <button
        onClick={() =>
          navigate("/ExamPrepTest", {
            state: { node_id: subject.node_id },
          })
        }
        className="stretched-link"
      >
        {subject.display_name}
      </button>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function SubjectUi({ subjects }) {
  const navigate = useNavigate();

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {subjects.map((subject, i) => (
            <div
              key={i}
              className="col card-hover shadow-none bg-none position-relative mb-4 mb-lg-5"
            >
              <img
                src={subject.thumbnail}
                className="b-block border rounded-3 shadow-sm"
                alt={subject.display_name}
              />
              <h3 className="h5 mt-4 mb-3 mb-lg-0">

                {subject &&
                subject.node_id &&
                subject.display_name == "exam preparation testing" ? (
                  <>
                    {console.log("node_id.display_name", subject)}
                    <button
                      onClick={() =>
                        navigate("/ExamPrepTest", {
                          state: { node_id: subject.node_id },
                        })
                      }
                      className="stretched-link"
                    >
                      {" "}
                      {subject.display_name}
                    </button>
                  </>
                ) : (
                  <>
                    {console.log("node_id.display_name", subject)}
                    <button
                      onClick={() =>
                        navigate(`/${subject.display_name}`, {
                          state: { node_id: subject.node_id },
                        })
                      }
                      className="stretched-link"
                    >
                      {" "}
                      {subject.display_name}{" "}
                    </button>
                  </>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

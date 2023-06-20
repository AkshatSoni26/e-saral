import ExamPrepTargetingComp from "./ExamPrepTargetingComp";
import SubjectsTargComp from "./SubjectsTargComp";

export default function SubjectUi({ subjects }) {

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
                {

                (subject &&
                subject.node_id &&
                subject.display_name == "exam preparation testing" )
                
                ? 
                    <ExamPrepTargetingComp subject={subject} />
                 : 
                  < SubjectsTargComp subject={subject} />
                   }
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

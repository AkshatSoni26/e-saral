import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';


const subject_data = createContext();

export default function SubjectUi({ subjects }) {

    const navigate = useNavigate();

    // const []

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {subjects.map(
                        (subject, i) => (
                            <div key={i} className="col card-hover shadow-none bg-none position-relative mb-4 mb-lg-5">
                                <img src={subject.thumbnail} className="b-block border rounded-3 shadow-sm" alt={subject.display_name} />
                                <h3 className="h5 mt-4 mb-3 mb-lg-0">
                                    {console.log('node_id',subject.node_id)}
                                    <button onClick={() => navigate(`/${subject.display_name}`, { state: { node_id: subject.node_id } })} className="stretched-link"> {subject.display_name} </button>
                                </h3>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}

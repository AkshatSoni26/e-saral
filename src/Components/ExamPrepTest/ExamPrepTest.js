import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';



export default function ExamPrepTest() {

    const location = useLocation();

    console.log( "we are under the Exam Prep Test page" ,location.state)

    const node_id = location.state.node_id 

    const [ExamPrep, setExamPrep] = useState();

    const navigate  = useNavigate();

    useEffect(
        () => {

    const URL = 'https://development.esaral.com/v2/contents/get-node-content-tree';


            const Headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("Access Key")
            };

            axios.post(URL,
                {
                    "node_id": node_id
                },
                { headers: Headers }
            ).then(
                (response) => {
                    // console.log("Exam Prep data 1",response.data.data.node_content_tree );

                    if (response.status === 200) {
                        console.log('Exam Prep data', response.data.data.node_content_tree)
                        setExamPrep(response.data.data.node_content_tree)
                    }
                    else {
                        document.getElementById("user_id").innerHTML = "ERROR";
                    }
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        }
        , []);


    return (
    (ExamPrep)
    ?
    navigate("/Content", { state : { chapterData : ExamPrep , 
        chapter_name : "", 
        ButtonClicked : 'learn'}})
        :

        <div style={{marginTop:"50vh",
        marginLeft: "50vw"}}>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
              
                )
}

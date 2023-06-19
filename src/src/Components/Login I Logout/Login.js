
import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';



function Login() {

    const navigate = useNavigate();

    const location = useLocation();
    

    useEffect(()=>{

        if(! localStorage.getItem("Access Key"))
{

    const data = location.state;


    console.log('data', data)
   

    const final_data = axios.post(data.login_url,{
                "country_code":data.country_code,
                    "phone_number":data.number,
                    "nonce":data.nonce,
                    "widevine":"UD6FE3hQlNFslkFhNiHmxL02Jrf4BlVfO+KskxHBs5g=",
                    "widevine_level":"L1",
                    "imei":"UD6FE3hQlNFslkFhNiHmxL02Jrf4BlVfO+KskxHBs5g=",
                    "id_organization":"1",
                    "firebase_notification_token":"f5aoEZM9Tu6gdd7lEMy58p:APA91bHSt0cBMyb875QZ2SpNl9rnMZOo3rRjWWEIq-J0dtr7khAuNV3BG6ea4wUsVGPO4kuNgwWVhGF2gz99Fm2dk5kgmgcbKKW4XPah6UHHRkaKlxEvgI49rvTmkMxj7uzeKOsXAcri",
                    "device_name":"Xiaomi",
                    "os":"Redmi K20 Pro",
                    "os_version":30
            })



    final_data.then((response) => {

        //  *** Data Error Handling.

        console.log(response)

        if (response.status ===200) {

        console.log(response.data.message);
        console.log(response.data.data.tokens.access);
        localStorage.setItem("Access Key",response.data.data.tokens.access);
        // document.getElementById("id").innerHTML = response.data.message;

        navigate("/", { state: localStorage.getItem("Access Key") });

        }

        else {
           
            console.log("Data Error",response);
            // document.getElementById("id").innerHTML =  response.data.message;
        }

    }).catch(

        // *** Server Side Error Handling.

        error => {
        console.log("error",error);
        // document.getElementById("id").innerHTML =  error;
    })

}

else {
    const Access_Key = localStorage.getItem("Access Key")
      Access_Key && navigate("/", { state: localStorage.getItem("Access Key")})

}
      })

    return (
        <div style={{marginTop:"50vh",
        marginLeft: "50vw"}}>

            <Spinner animation="grow" />
        </div>
    )
};


export default Login;

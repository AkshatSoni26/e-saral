import React, { useRef, useState } from "react";
import axios from "axios";
import {  MDBAlert } from 'mdb-react-ui-kit';
import { Alert } from "react-bootstrap";



const URL = "https://development.esaral.com/v2/users/update-profile"

export default function EditForm() {

  const triggerItem = useRef();

  const triggerItem1 = useRef(null);


  const profile = JSON.parse(localStorage.getItem("info")).profile;

  const containerStyle = {
    padding: "0 350px 350px 350px",
    margin: "10%",
  };

  const [formData, setFormData] = useState({
    name: profile.full_name,
    number: profile.phone_number,
  });


  //   const EditFormDataRequest = axios.post(URL,{
  //     "full_name" : profile.full_name,
  // })

  //   const { name, number } = formData;

  const handleSubmit = (e) => {

    let a = window.confirm(`A name was submitted: ${formData.name}`);

    console.log(a)

    const Headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("Access Key")
    };

    if (a == true) {
      axios.post(URL, {
        "full_name": formData.name,
      },
        { headers: Headers }

      ).then((response) => {
        console.log("successfully add the name");
        // triggerItem.current.show();
        // return (
        //   <Alert key="success" variant="success" >
        //   This is a success alert—check it out!
        // </Alert>
        // )
      })
        .catch((error) => {
          console.log("some error occurred");
          // triggerItem1.current.show();
        }
        )
    }

    console.log("handle Submit", formData.name);
    e.preventDefault();
    // Do something with the form data, like making an API call or updating state
    console.log(formData);
  };
  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">User Name </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            autoFocus
          />
          {console.log(formData.name)}

          <small id="emailHelp" class="form-text text-muted">
            We'll never share your data with anyone else.
          </small>
        </div>

        <br />

        <div class="form-group">
          <label for="exampleInputPassword1">Phone Number</label>
          <input
            type="Phone-Number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Phone"
            value={formData.number}
            readOnly // Add the readOnly attribute
          />
        </div>

        <br />

        <div
          style={{
            paddingLeft: "40%",
          }}>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      {/* <MDBAlert
        color='success'
        autohide
        width={800}
        position='top-right'
        offset={50}
        delay={2000}
        appendToBody
        triggerRef={triggerItem}
      >
        A simple success alert with
        <a href='#' className='alert-link'>
          an example link
        </a>
        . Give it a click if you like.
      </MDBAlert>

      <MDBAlert
        color='danger'
        autohide
        width={800}
        position='top-right'
        offset={50}
        delay={2000}
        appendToBody
        triggerRef={triggerItem1}
      >
        A simple danger alert with
        <a href='#' className='alert-link'>
          an example link
        </a>
        . Give it a click if you like.
      </MDBAlert> */}


    </div>
  );
}

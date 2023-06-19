import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "https://development.esaral.com/v2/users/update-profile";

export default function EditForm() {
  const navigate = useNavigate();

  const profile = JSON.parse(localStorage.getItem("info")).profile;

  const containerStyle = {
    padding: "0 350px 350px 350px",
    margin: "10%",
  };

  const [formData, setFormData] = useState({
    name: profile.full_name,
    number: profile.phone_number,
  });

  const handleSubmit = (e) => {
    let a = window.confirm(`A name was submitted: ${formData.name}`);

    console.log(a);

    const Headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Access Key"),
    };

    if (a == true) {
      axios
        .post(
          URL,
          {
            full_name: formData.name,
          },
          { headers: Headers }
        )
        .then((response) => {
          console.log("successfully add the name");
          navigate("/");
        })
        .catch((error) => {
          console.log("some error occurred");
        });
    } else {
      const error = validateName();
      if (error) {
        const editName = document.getElementById("edit-name");
        editName.style.color = "red";
        editName.innerHTML = error;
      }
    }

    console.log("handle Submit", formData.name);
    e.preventDefault();
    // Do something with the form data, like making an API call or updating state
    console.log(formData);
  };

  function validateName() {
    if (formData.name === profile.full_name) {
      return "Don't use previous name";
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.name)) {
      return "Name should not contain special characters";
    }
    return "";
  }

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">User Name </label>
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

        <p id="edit-name" style={{ color: "red" }}>
          {validateName()}
        </p>

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
        <p id="edit-name"></p>

        <br />

        <div
          style={{
            paddingLeft: "40%",
          }}
        >
          <button
            disabled={
              formData.name == profile.full_name ||
              /[!@#$%^&*(),.?":{}|<>]/.test(formData.name)
            }
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

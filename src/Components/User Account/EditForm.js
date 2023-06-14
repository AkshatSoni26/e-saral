import React, { useState } from "react";

export default function EditForm() {
  const profile = JSON.parse(sessionStorage.getItem("info")).profile;

  const containerStyle = {
    padding: "0 350px 350px 350px",
    margin: "10%",
  };

  const [formData, setFormData] = useState({
    name: profile.full_name,
    number: profile.phone_number,
  });

  //   const { name, number } = formData;

  const handleSubmit = (e) => {
    alert("A name was submitted: " + formData.name);

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
    </div>
  );
}

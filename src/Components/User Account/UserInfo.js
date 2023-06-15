import React from "react";
import "./account.css";
import { useNavigate } from "react-router-dom";

export default function UserInfo({ PROFILE_DATA, ICON_SIZE }) {

  const navigate = useNavigate();

  return (

    
    <div>
      <div className="container ProCss">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width= {ICON_SIZE.width}
            height= {ICON_SIZE.height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>

        <div className="statSty">My Profile</div>
      </div>

      <div className="container userInfo">
        <div>
   
        <img className="image" src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"></img>

        </div>

        <div className="proPad" > 
          <div className="user-name">{PROFILE_DATA.full_name}</div>

          <div className="PHONE-NUMBER">+91 {PROFILE_DATA.phone_number}</div>

          <div className=" container EDIT-BUT">
            <div>
              <a onClick={ () => navigate("/edit")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.414 4.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828l-9.9 9.9a1 1 0 0 1-.342.22l-3.805.954a1 1 0 0 1-1.274-1.273l.955-3.805a1 1 0 0 1 .22-.342l9.9-9.9zM16.828 6.004L6 16.832V20h3.168L17.996 9.172 16.828 6.004zM19 2h4v4l-1.003.001L19 6.998V2z" />
              </svg>
              Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

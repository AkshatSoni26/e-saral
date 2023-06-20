import React from "react";
import "./account.css";
import { useNavigate } from "react-router-dom";
import { EditSVG, UserInfoSVG } from "../SVGs/Svgs";
import { ProfileImageURL } from "../URLS/Urls";

export default function UserInfo({ PROFILE_DATA, ICON_SIZE }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container ProCss">
        {UserInfoSVG}

        <div className="statSty">My Profile</div>
      </div>

      <div className="container userInfo">
        <div>
          <img className="image" src={ProfileImageURL}></img>
        </div>

        <div className="proPad">
          <div className="user-name">{PROFILE_DATA.full_name}</div>

          <div className="PHONE-NUMBER">+91 {PROFILE_DATA.phone_number}</div>

          <div className=" container EDIT-BUT">
            <div>
              <a onClick={() => navigate("/edit")}>
                {EditSVG}
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import profile from "../../imgs/profile.png";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <div class="profile">
          <div class="info">
            <p>
              Hi, <b style={{ color: "blue" }}>Akshay!</b>
            </p>
          </div>
          <div class="profile-photo">
            <img
              src={profile}
              alt="profile"
              style={{ width: "3.2rem", height: "3.2rem", borderRadius: "50%" }}
            />
            <small class="text" style={{ fontWeight: "bold" }}>
              Admin
            </small>
          </div>
        </div>
        <hr></hr>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <hr></hr>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;

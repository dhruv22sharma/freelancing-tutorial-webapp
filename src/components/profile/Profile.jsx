import React, { Component } from "react";
import "./Profile.css";
class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <img src={require("./Dhruvimg.jpg")} alt="" />
        <div className="details">
          <div>
            <b>Username : </b>Dhruv Sharma
          </div>
          <div>
            <b>Designation : </b>Student
          </div>
          <div>
            <b>Feild Of Interest : </b>C/C++/React
          </div>
          <div>
            <b>E-mail : </b>Dhruv22sh@gmail.com
          </div>
        </div>
        <hr />
        <h1>Schedule</h1>
        <div className="timetable">
          <ul>
            <li>
              <span>Class 1</span>
              <span>11:00AM</span>
            </li>
            <li>
              <span>Class 2</span>
              <span>12:00PM</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

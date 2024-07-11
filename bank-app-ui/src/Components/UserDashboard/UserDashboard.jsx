import axios from "axios";
import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const GetAllUser = (event) => {
    fetch(
      "https://localhost:8443/banking-service/user-service/user/GetAllUser",
      {
        credentials: "include",
      }
    ).then(
      (data) => console.log(data),
      (error) => console.log(error)
    );

    event.preventDefault();
  };
  return (
    <form onSubmit={GetAllUser}>
      <div className="main-dashboard">
        {" "}
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default UserDashboard;

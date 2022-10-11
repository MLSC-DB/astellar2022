import axios from "axios";
import React, { useEffect } from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";



const Profile = () => {
  async function populateProfile() {
    const res = await axios.get("http://localhost:3001/user/getDetails",{
        headers:{
            'astellar-headers':localStorage.getItem("jwt")
        }
    });
    
    console.log(res.data);
  }
  const history = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log(token);
    if (token) {
      const team = decodeToken(token);
      console.log(team);
      if (!team) {
        localStorage.removeItem("jwt");
        history("/login");
      } else {
        populateProfile();
      }
    } else {
      history("/login");
      populateProfile();
    }
  });
  return (
    <h1>
      hello
    </h1>
  );
};

export default Profile;

import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./login.css";
import FormInput from "./FormInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SRV_URL = process.env.REACT_APP_SRV_URL;

export default function Register() {
  const [values, setValues] = useState({
    teamname: "",
    email: "",
    u1: "",
    u2: "",
    u3: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "teamname",
      type: "text",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      placeholder: "Teamname",
      label: "Enter Teamname",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      required: true,
      errorMessage: "Please enter a valid email address!",
      placeholder: "someone@domain.com",
      label: "E-mail ID of Team Leader",
    },
    {
      id: 3,
      name: "u1",
      type: "text",
      required: true,
      errorMessage: "Leader Name can't be empty",
      placeholder: "Leader name",
      label: "Name of Leader",
    },
    {
      id: 4,
      name: "u2",
      type: "text",
      errorMessage: "",
      placeholder: "Team Player 1",
      label: "Name of Player 1",
    },
    {
      id: 5,
      name: "email1",
      type: "email",

      errorMessage: "Please enter a valid email address!",
      placeholder: "someone@domain.com",
      label: "E-mail ID of Player 1",
    },
    {
      id: 6,
      name: "u3",
      type: "text",
      errorMessage: "",
      placeholder: "Team Player 2",
      label: "Name of Player 2",
    },
    {
      id: 7,
      name: "email2",
      type: "email",
      errorMessage: "Please enter a valid email address!",
      placeholder: "someone@domain.com",
      label: "E-mail ID of the Player 2",
    },
    {
      id: 8,
      name: "password",
      type: "password",
      required: true,
      errorMessage:
        "Password should be atleast 8-16 characters and must include atleast 1 letter, 1 number and 1 special character ",
      placeholder: "Password",
      label: "Enter password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const payload = JSON.stringify(Object.fromEntries(data.entries()));
    console.log(SRV_URL);
    const myObj = JSON.parse(payload);

    axios
      .post(`${SRV_URL}/user/signup`, {
        teamname: myObj.teamname,
        u1: myObj.u1,
        u3: myObj.u3,
        u2: myObj.u2,
        email1: myObj.email1,
        email2: myObj.email2,
        email: myObj.email,
        password: myObj.password,
      })
      .then((result) => {
        toast.success(" Successful registration!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        const msg = err.response.data.errors[0].msg;

        toast.error(msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container fluid className="sponsor-section" id="about">
        <Container>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              letterSpacing: "0.5rem",
              paddingBottom: "3rem",
              paddingTop: "7rem",
            }}
          >
            <span className="purple"> REGISTER </span>
          </h1>
          <Row>
            <div className="form-gallery">
              <form onSubmit={handleSubmit} className="form-content">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <style type="text/css">
                  {`
    .btn-outline-light:hover{
      color: white;
      transform:scale(1.2);}    
    `}
                </style>
                <Button
                  variant="outline-light"
                  type="submit"
                  style={{
                    fontSize: "1.5rem",
                    width: "auto",
                    height: "auto",
                    background: "none",
                    marginTop: "3rem",
                    marginBottom: "3rem",
                    justifyContent: "center",
                    align: "center",
                  }}
                >
                  Register !
                </Button>{" "}
              </form>
            </div>
          </Row>
        </Container>
      </Container>
      <ToastContainer />
    </>
  );
}

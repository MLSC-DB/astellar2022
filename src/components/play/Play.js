import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button, Container } from "react-bootstrap";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useCallback } from "react";

const Play = () => {
  const qno = 1;
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   navigate("/play/level", { state: { qno: qno } });
  // }, [navigate]);

  const populateProfile = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/api/user/getDetails", {
      headers: {
        "astellar-headers": localStorage.getItem("jwt"),
      },
    });
    // console.log(res);
    if (res.status > 400) {
      return {
        success: false,
        data: null,
      };
    }
    return {
      success: true,
      data: res,
    };
  }, []);

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("jwt");
      // console.log(token);
      if (token) {
        const team = decodeToken(token);
        if (!team) {
          localStorage.removeItem("jwt");
          navigate("/login");
        } else {
          const res = await populateProfile();
          console.log("Here")
          setData(res.data);
          navigate("/play");
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    }

    setLoading(true);
    getData();
  }, [navigate, populateProfile]);
  const buttonStyles = {
    display: "flex",
    fontSize: "1.5rem",
    width: "auto",
    height: "auto",
    background: "none",
    marginTop: "3rem",
    marginBottom: "3rem",
    justifyContent: "center",
    align: "center",
  };
  if (loading && !data) return <h2>loading</h2>;
  return (
    <>
      <Container fluid className="sponsor-section" id="about">
        <Container>
          <Row>
            <div className="form-gallery">
              <style type="text/css">
                {`
    .btn-outline-light:hover{
      color: white;}
      .btn-outline-light:active{
        color:green;
      }    
    `}
              </style>
              <Button
                variant="outline-light"
                type="submit"
                onClick={() => {
                  navigate("/play/level", { state: { qno } });
                }}
                style={buttonStyles}
              >
                Login !
              </Button>{" "}
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Play;

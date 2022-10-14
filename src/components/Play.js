import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button, Container } from "react-bootstrap";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useCallback } from "react";
import SpaceCanvas from "./SpaceCanvas";

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
      if (token) {
        const team = decodeToken(token);
        if (!team) {
          localStorage.removeItem("jwt");
          navigate("/login");
        } else {
          const res = await populateProfile();
          console.log("Here");
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

  if (loading && !data) return <h2>loading</h2>;
  return (
    <>
      <Container fluid className="sponsor-section" id="about">
        <Container>
          <Row>
            <SpaceCanvas />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Play;

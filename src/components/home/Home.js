import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Sponsors from "./Sponsors";
import Button from "react-bootstrap/Button";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Countdown from "../Countdown";
import Register from "../auth/Register";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="heading">
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                }}
              >
                Astellar
              </h1>
              <h1 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                15<sup>th</sup> October 2022
              </h1>
              <p className="home-about-body">
                Welcome Player,
                <br /> We at MLSC DB introduce you to,
                <b className="purple"> ASTELLAR</b> , a simple yet challenging
                cryptic hunt.
                <br />
                <br />
                Here your skills will be tested, from core cryptography to
                general Gen-Z stuff, from hard core Linux to Anime trivia,
                <b className="purple">
                  {" "}
                  anything and everything a geek loves,{" "}
                </b>
                we've got you covered.
                <br />
                <br />
                If you're looking for an exciting new puzzle competition with a
                tech-based twist, look no further than{" "}
                <b className="purple"> Astellar! </b>Whether you're a seasoned
                pro or a novice, we'll have you hooked in no time.
              </p>
              <div className="sponsorUS">
                <Button
                  variant="outline-light"
                  href="/auth"
                  target="_blank"
                  type="submit"

                  style={{
                    fontSize: "1.5rem",
                    width: "auto",
                    height: "auto",
                    background: "none",
                    justifyContent: "center",
                    align: "center",
                  }}
                >
                  Register Your Team
                </Button>{" "}
              </div>
            </Col>
            <Col
              md={5}
              style={{
                paddingBottom: 20,
                paddingTop: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
          <Countdown />
        </Container>
      </Container>
      <Timeline />
      <Sponsors />
      <Contact />
    </>
  );
}

export default Home;

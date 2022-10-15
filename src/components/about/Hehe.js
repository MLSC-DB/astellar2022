import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";


function Hehe() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="about-content">
          <Row>
            <Col md={12} className="heading" style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  letterSpacing: "0.5rem",
                  paddingBottom: "1rem",
                }}
              >
                ABOUT US
              </h1>
              {/* <p
                className="home-about-body"
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Bernard Berenson 
                
              </p> */}
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
}

export default Hehe;

import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import FAQ from "./FAQ";

function About() {
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
              <p
                className="home-about-body"
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Our story at <b class="purple">MLSC DB </b> is more than just a
                fancy name. We’re a community of geeks who enjoy sharing
                knowledge with the world. We want our members to be able to
                benefit from our collective expertise, regardless of their
                current exposure. We conduct monthly meetups, hands-on workshops
                and <b class="purple">&lt;cool&gt;</b> events. If you have any
                questions, our friendly and knowledgeable team would be more
                than happy to help.
                <br />
                <br /> Thank you for being part of the MLSC community!
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <FAQ />
    </>
  );
}

export default About;

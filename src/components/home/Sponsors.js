import React from "react";
import { Container, Row } from "react-bootstrap";
import SponsorItem from "./SponsorItem";
import Button from "react-bootstrap/Button";
import { AiOutlineMail } from "react-icons/ai";

const sponsorList = [
  {
    text: "Taskade",
    link: {
      src: require("../../Assets/taskade.webp"),
      url: "https://www.taskade.com/",
    },
  },
  {
    text: "Quick Heal",
    link: {
      src: require("../../Assets/quickheal.png"),
      url: "https://www.quickheal.co.in/",
    },
  },
  {
    text: "Cybrancee",
    link: {
      src: require("../../Assets/cybrancee.png"),
      url: "https://cybrancee.com/",
    },
  },
  {
    text: "Balsamiq",
    link: {
      src: require("../../Assets/balsamiq.webp"),
      url: "https://balsamiq.com/",
    },
  },
  {
    text: "Give My Certificate",
    link: {
      src: require("../../Assets/givemycertificate.webp"),
      url: "https://givemycertificate.com/",
    },
  },
];

function Sponsors() {
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
            }}
          >
            <span className="purple"> SPONSORS </span>
          </h1>
          <Row>
            <div className="gallery">
              {sponsorList.map((data, idx) => (
                <SponsorItem data={data} key={idx} />
              ))}
            </div>
            <div className="sponsorUS">
              <style type="text/css">
                {`
    .btn-outline-light:hover{
      color: white;
      transform:scale(1.2);}    
    `}
              </style>
              <Button
                variant="outline-light"
                href="mailto:mscdb@thapar.edu"
                type="submit"
                style={{
                  fontSize: "1.5rem",
                  width: "auto",
                  height: "auto",
                  background: "none",
                }}
              >
                Sponsor Astellar <AiOutlineMail />
              </Button>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Sponsors;

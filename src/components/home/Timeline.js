import React from "react";
import { Container, Row } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    text: "Stargaze : The Treasure Hunt",
    date: "Oct 14 2022",
    category: {
      tag: "Offline",
      color: "#018f69",
    },
  },
  {
    text: "BrokerJack : The Crossword Competition",
    date: "Oct 14 2022",
    category: {
      tag: "Offline",
      color: "#018f69",
    },
  },
  {
    text: "G4M3 : LAN and Console Gaming Event",
    date: "Oct 15 2022",
    category: {
      tag: "Offline",
      color: "#018f69",
    },
  },
  {
    text: "Astellar : The Cryptic Hunt",
    date: "Oct 15-16 2022",
    category: {
      tag: "Online",
      color: "#018f69",
    },
    link: {
      url: "https://astellar.xyz/about",
      text: "Details",
    },
  },
];

function Timeline1() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
          }}
        >
          <span className="purple"> EVENT TIMELINE </span>
        </h1>
        <Row>
          <div className="timeline-container">
            {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </Row>
      </Container>
    </Container>
  );
}
export default Timeline1;
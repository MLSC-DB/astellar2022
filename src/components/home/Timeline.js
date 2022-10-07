import React from "react";
import { Container, Row } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    text: "Astellar : The Cryptic Hunt",
    date: "Oct 15-16 2022",
    category: {
      tag: "Online",
      color: "#018f69",
    },
    link: {
      url: "https://astellar.xyz/",
      text: "Details",
    },
  },
  {
    text: "BrokerJack : The Crossword and Trading Competition",
    date: "Oct 17 2022",
    category: {
      tag: "Offline",
      color: "#018f69",
    },
    // link: {
    //   url: "https://google.com",
    //   text: "Details",
    // },
  },
  {
    text: "G'Game : LAN and Console Gaming Event",
    date: "Oct 17 2022 5 PM Onwards",
    category: {
      tag: "Offline",
      color: "#018f69",
    },
    // link: {
    //   url: "https://google.com",
    //   text: "Details",
    // },
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
            paddingBottom:"3rem"
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

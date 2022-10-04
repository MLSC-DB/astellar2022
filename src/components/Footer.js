import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("backslash ki maa ki chut");
      console.log("bcs laude pe");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    
      <Container fluid className="footer">
        <Row>
          <Col md="12" className="footer-copywright">
            <h3>
              Copyright © {year}
              <br />
              Created with ❤ by Microsoft Learn Student Chapter, Derabassi
            </h3>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;

import React from "react";
import { useNavigate } from "react-router-dom";
import {Row,Button,Container} from "react-bootstrap";
const Play = () => {
  const qno = 1;
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/play/level", { state: { qno: qno } });
  }, [navigate]);
  return(
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
                  style={{
                    display: "flex",
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
                  Login !
                </Button>{" "}
              </div>
            
          </Row>
        </Container>
      </Container>
    </>
  )
};

export default Play;

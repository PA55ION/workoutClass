import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import workout from "../assets/workout.png";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="hero container">
            <h1 className="hero_text_banner">
              {" "}
              Stay Productive & Work Remotely
            </h1>
            <p className="hero_text">
              The key to work-from-home success is to create an environment that
              allows you to focus on the tasks at hand. Whether you are working
              from home for the first time.
            </p>
          </div>
        </Col>
        <Col>
          <div className="img_container">
            <img className="img_banner" src={workout} alt="hero" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron } from "react-bootstrap";

const Hero = () => {
  return (
    <Jumbotron fluid style={{ height: "40rem" }}>
      <h1>Hero</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
    </Jumbotron>
  );
};

export default Hero;

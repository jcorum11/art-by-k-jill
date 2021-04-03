import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron } from "react-bootstrap";

const Hero = () => {
  return (
    <Jumbotron fluid>
      <div id="hero-container">
        <div className="hero-img"></div>
      </div>
    </Jumbotron>
  );
};

export default Hero;

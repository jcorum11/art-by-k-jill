import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="Art by K. Jill logo"
          src="/chilogo.png"
          width="30%"
          height="30%"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;

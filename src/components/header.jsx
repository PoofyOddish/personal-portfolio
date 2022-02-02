import React, { useEffect } from "react";
import { Router, Link } from "wouter";

import PageRouter from "../components/router.jsx";
import useHashLocation from "../hooks/wouter-hash";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Navbar";

const Header = () => {

  return (
    <>
      {/* <header className="header-section d-none d-xl-block">  */}
      <Router hook={useHashLocation}>
        
        
        <Navbar bg="dark" variant="dark" sticky="top">
        <div >
        <Row>
            <Col className='col-4'>
          <Container className="links">
              <Link href="/" className="btn btn-light">Home</Link>
              <Link href="/about" className="btn btn-light">About</Link>
              <Link href="/contact-me" className="btn btn-light">Contact</Link>
          </Container>
          </Col>
          </Row>
        </div>
        </Navbar>
        
      </Router>
    </>
  );
};

export default Header;
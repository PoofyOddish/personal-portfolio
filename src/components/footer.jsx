import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  
  return(
    
        <footer className="footer">
          <Row>
            <Col className='col-4'>
                <Container id="socialMedia">
                <a href="https://www.linkedin.com/in/jorbass/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} color="white"  size="2x"/>
                </a>
                <a href="https://github.com/PoofyOddish" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github']} color="white"  size="2x"/>
                </a>
                <a href="https://www.tiktok.com/@datadummy" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'tiktok']} color="white"  size="2x"/>
                </a>
                <a href="https://www.instagram.com/poofy0ddish/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'instagram']} color="white"  size="2x"/>
                </a>
              </Container>  
            </Col>
            <Col>
              
            </Col>
            </Row>
      </footer>
      
    )
};

export default Footer;
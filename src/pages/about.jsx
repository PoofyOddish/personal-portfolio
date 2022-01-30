import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ThemeState } from "../index.jsx"

/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function About() {

  const [ state, dispatch ] = React.useContext(ThemeState);
  console.log(state.theme);

  function CaroSwitch() {
      if (state.theme == "normal") {
        return (              
        <Carousel>
          <Carousel.Item>
            <img
              className="rounded d-block justify-center"
              src="http://www.jordan-serna.com.s3.amazonaws.com/assets/halloween.jpeg"
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>Halloween with the puppers!</h3>
              <p>Not pictured: Pirate cat</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="rounded d-block justify-center"
              src="http://www.jordan-serna.com.s3.amazonaws.com/setup.jpeg"
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>Me in my natural habitat</h3>
              <p>We don't talk about my posture</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        )
      } else {
        return (        
        <Carousel>
          <Carousel.Item>
            <img
              className="rounded d-block justify-center"
              src="http://www.jordan-serna.com.s3.amazonaws.com/assets/halloween_nightmare.jpeg"
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>Halloween with the puppers!</h3>
              <p>Not pictured: Pirate cat</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="rounded d-block justify-center"
              src="http://www.jordan-serna.com.s3.amazonaws.com/assets/setup_nightmare.png"
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>Me in my natural habitat</h3>
              <p>We don't talk about my posture</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        )
      };
  };

    return (
      <div className="page">
        <h1 className="title">About Jordan</h1>
        <Container id='aboutMe'>
          <Row>
          <Col className='col-md-8'>
            <p>
              Hopefully if you've found this site, you know me a little bit, but
              here's some info in case you don't!
            </p>
            <p>
              I'm a late-20 something currently living in chilly Colorado with my
              partner, two dogs, cat, and many houseplants. I enjoy playing video
              games and a variety of crafts in my freetime, and try to visit both
              Disneyland and Disney World as much as I can.
            </p>
            <p>
              I'm an academically and professionally trained data analyst, and I'm now
              expanding into the world of web development! Here are some career highlights!
            </p>
            <ul>
              <li>
                &#127979; Graduated with BA in Applied Economics from UC Denver in
                2018
              </li>
              <li>
                &#128176; Worked at the Federal Reserve Bank of Kansas City as a
                Research Analyst
                <ul>
                  <li>
                    Worked alongside economists to analyze data + publish findings
                  </li>
                  <li>
                    Spearheaded effort to research and publish findings on
                    workplace automation
                  </li>
                  <li>
                    Created process efficiencies through Python programming +
                    advanced Excel formulas
                  </li>
                </ul>
              </li>
              <li>
                &#128250; Worked at Dish Network as a Senior Business Operations
                Analyst
                <ul>
                  <li>
                    Developed internal Data Auditing + Validation Environment
                    (DAVE) to improve data quality and monitoring
                  </li>
                  <li>
                    Created production Tableau dashboards to analyze and visualize
                    data to Director-level audiences
                  </li>
                </ul>
              </li>
              <li>
                &#127973; Currently working at State of Colorado as Mental Health
                Evaluator (Data Analyst/Data Manager)
                <ul>
                  <li>
                    Manages data collection and quality assurance for serious
                    mental illness programs
                  </li>
                  <li>
                    Compiles data for and manages federal required reporting
                  </li>
                  <li>
                    Develops production Tableau dashboards for internal and
                    external audiences
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col className='col-md-4'>
            <div className="carouselContainer">
            <Container >
              <CaroSwitch />
            </Container>
            </div>
          </Col>
            </Row>
        </Container>
      </div>
    );
  };
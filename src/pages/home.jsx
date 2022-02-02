import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import { useState } from 'react';
import { ThemeState } from "../index.jsx"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Row, Col} from 'react-bootstrap/';

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
  
  const [ state, dispatch ] = React.useContext(ThemeState);

  // useState keeps an internal state in the component
  let initialTxt = 'nice to meet ya!';
  
  const [text, setText] = React.useState(initialTxt);

  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  function TextSwitch() {
    if (state.theme == "normal") {
      return ( 
        <div></div>
      )} else {
        return ( 
          <div className="card">
          <img src="http://www.jordan-serna.com.s3.amazonaws.com/assets/glitch.gif" className="card-img-top" alt="Data in the shape of a heart." />
            <div className="card-body">
              <h5 className="card-title" align='center'></h5>
              <div className="card-text" align='center'>
                á̶̧̛̰̞͙͔͉͊̈́̈̏̀̔̀̀͝͠ȓ̴͕̹̰͎̺͛͋̀̎͑̑̾͌̐͌͋͝è̶̹͕̖͖͈̞̖̭͑͝n̸̙̻̫͎̍͗̇͂̎̅͊̓͋̇̚̕'̷̜̅̇͋͊͐̇̐͑̏̃̋̌͝͠t̶̡̞̱̮̳̳̪̆͂̆͘ ̴̼̪̼͇͍̗̙̺͋̂͑̄͐͌̈́́̄̿̉̃̚͜͜͝y̶̨̡̢̫̰̟͖̼͖̩̳̜̟̹͐̿̄͐͆̐̈́̄̽̕͘͝o̷̢̢͔͚̫̥͍͚̯̯͈̗͈̫̅͂̑̀̇̔͛̆̌͝͝ư̶̠̺̠̫͓̙̯̘̑ ̷̛͍̘̫̖̭̮̗̰̗̥̹̬̳͓̑̉͊̋̇̂͗͆̾̀̈́͝â̵͕̲̮̄͋̆̃̉͋͋͒̒̓͠͠ ̵̨̨̹̫̺̫̽̌̈́̽̋̀̌͌́̕͜ș̸̞̩̖̜͇͔̪͈̓̔̒̀̊͋m̸͖̥̻̓̃̍͂͊͑͗͋͑̕a̴̛̗̙̳̰̰͔̋̆͆̿̈́̇͘̚͝r̸̰̪̭͙̪̹̩̽̕t̶̛̲́͊̈ ̷̧͎̓̒́̄͝ó̶̯̼̥̟̳̭͔͚̭̞̝̺̀́͛͛̽͠͠ͅͅñ̷̡̫͍͍̹̹͜e̵̡̨̛̫̻̳̜̣̥͈͇̊́̄
              </div>
            </div>
          </div>
        )}
      };

  return (
    <>
      <h1 className="title">Jordan Serna</h1>
      <animated.div onMouseEnter={trigger} style={style}>
        <Image
          src="http://www.jordan-serna.com.s3.amazonaws.com/assets/home_pic_new.png"
          
          className="illustration"
          alt="Pic of website creator"
        />
      </animated.div>
      <div className="home_text rounded">
        <h2>Howdy there &#129312;</h2>
        <p>
          Welcome to my webpage. This is currently in development (clearly) but this is where I will be 
          <Link href="/store" id="hiddenLink"> stor</Link>ing progress in learning web development and any additional random musings.
          <br/><br/>
          Thanks for checking it out!
        </p>
      </div>
      <br/>
      <div id='expertise'>
      <h2 >Areas of Expertise</h2>
      <br/>
      <Container className="rounded">
        <Row>
        </Row>
        <Row>
      <div className="card-group">
        
          <div className="card">
          <img src="http://www.jordan-serna.com.s3.amazonaws.com/assets/data.jpg" className="card-img-top" alt="Data in the shape of a heart." />
            <div className="card-body">
              <h5 className="card-title" align='center'>Data Analysis + Engineering</h5>
              <div className="card-text">
                <ul>
                  <li> 5+ years of analytics experience</li>
                  <li> Well-versed in SQL / Python workflows for data processing</li>
                  <li> Leverages Google API to automate data workflows</li>
                  <li> Experienced in implementing advanced functions + parameters in Tableau</li>
                  <li> Has been referred to as the "data nerd" at more than one job</li>
                </ul>
              </div>
            </div>
          </div>

          < TextSwitch/>
        
          <div className="card">
          <img src="http://www.jordan-serna.com.s3.amazonaws.com/assets/react.jpg" className="card-img-top" alt="VS Code editor with React logo." />
            <div className="card-body">
              <h5 className="card-title" align='center'>Front End Development</h5>
              <div className="card-text">
              <ul>
                  <li> Beginner in front end, but a quick learner</li>
                  <li> Built this website in React JS</li>
                  <li> Also knowledgable in HTML, CSS, and Bootstrap</li>
                  <li> Check out portfolio (coming soon!) for more examples of work</li>
                  <li> Source code for this website available on <Link href="https://github.com/PoofyOddish">Github</Link></li>
                  <li> I just think coding is neat</li>
                </ul>
              </div>
            </div>
          </div>
      </div>

      </Row>
      </Container>
      </div>
    </>
  );
}

import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import { useState } from 'react';
import { ThemeState } from "../index.jsx"

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
  console.log(state.theme);

  // useState keeps an internal state in the component
  let initialTxt = 'nice to meet ya!';
  
  const [text, setText] = React.useState(initialTxt);

  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  return (
    <>
      <h1 className="title">Jordan Serna</h1>
      <h2 className="title">&#129409;</h2>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="http://www.jordan-serna.com.s3.amazonaws.com/airport.png"
          className="illustration"
          onMouseOver={e => (e.currentTarget.src = "http://www.jordan-serna.com.s3.amazonaws.com/sams_edited.png")}
          onMouseOut={e => (e.currentTarget.src ="http://www.jordan-serna.com.s3.amazonaws.com/scared.png")}
          onMouseEnter={() => setText("i'm ticklish stop that! D:")}
          onMouseLeave={() => setText("dude don't poke me again")}
          
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me">
            <div>
                {text}
              </div>
          </a>
        </animated.div>
      </div>
      <div className="home_text rounded">
        <h2>Howdy there &#129312;</h2>
        <p>
          Welcome to my webpage. This is currently in development (clearly) but this is where I will be 
          <Link href="/store" id="hiddenLink"> stor</Link>ing progress in learning web development and any additional random musings.
          <br/><br/>
          Thanks for checking it out!
        </p>
      </div>
    </>
  );
}

import React, { useEffect, useState, useRef }  from "react";
import { ThemeState } from "../index.jsx"

export default function ClickClack() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(255);
  const [color, setColor] = useState("rgb(255,255,255)");
  const [showShade, setShade] = useState(true);
  const [countDown, setcountDown] = useState(11);
  const [buttonLock, setLock] = useState(false);

  const [ state, dispatch ] = React.useContext(ThemeState);
  
  //https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

 useInterval(() => {
          setcountDown(countDown - 1);
          setSize(size-25);
          setColor(`rgb(${size},${size},${size})`);
          setShade(countDown == 1 ? false : true);

          if (countDown == 1) {
            dispatch({ type: "nightmare_switch" })
          }
          //console.log(state.theme)
    }, buttonLock & countDown > 0 ? 1000 : null);

  function handleClick() {
      // Use updater function when new state is derived from old
        if (buttonLock) {
          return;
        }
        setLock(true);
    };


  function RenderShade() {
    if (!showShade)
      {
        return null;
      }
        return (
          <div className = 'shade' 
            style={{backgroundColor: color}}>
          <div width="64" height="38">
          <button className="specialButton btn btn-dark" onClick={handleClick}  width="64" height="38">
            <div>{countDown === 11 ?
            "click me (:" :
            countDown}</div>
          </button> 
          </div>
        </div>
      );
  };

    return (
      <div className="store" style={{backgroundColor: color}}>
      < RenderShade />
      <iframe frameborder="0" src="https://itch.io/embed-upload/5146665?color=333333" allowfullscreen="" width="640" height="380">
              <a href="https://jserna.itch.io/hidden-vn">
              </a>
        </iframe>

      </div>
    );
};

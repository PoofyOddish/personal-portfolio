import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import contactMe from "../pages/contact-me";
import Store from "../pages/hidden/store";
/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/


class PageRouter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        theme: this.props.theme,
    }

    //this.handleCallback = this.handleCallback.bind(this);
}

//handleCallback = (childData) => {
  //this.setState({theme: childData});
  //this.props.parentCallback(this.state.theme);
//}

  render() {
    //console.log(this.state.theme);
    //const {theme} = this.state;
    //console.log({theme});
  return(
      
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact-me" component={contactMe} />
          <Route path="/store" component={Store} />
        </Switch>
    
  );
  };
};

export default PageRouter;

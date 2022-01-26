import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

// Home function that is reflected across the site
export default function Home() {
  library.add(faGithub, faLinkedin, faTiktok, faInstagram);
  
  return (
    <Router hook={useHashLocation}>
      
      
      
      <Seo />
      <Header />
      
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      < Footer/>

    </Router>
  );
}

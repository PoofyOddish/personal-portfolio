import React, { useEffect } from "react";
import { Router, Link } from "wouter";

import PageRouter from "../components/router.jsx";
import useHashLocation from "../hooks/wouter-hash";

const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <>
      {/* <header className="header-section d-none d-xl-block">  */}
      <Router hook={useHashLocation}>
        <header className="header-section header">
          <div className="links">
            <Link href="/">Home</Link>
            <span className="divider">|</span>
            <Link href="/about">About</Link>
          </div>
        </header>
      </Router>
    </>
  );
};

export default Header;

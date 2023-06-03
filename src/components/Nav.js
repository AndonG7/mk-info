/* eslint-disable no-restricted-globals */
import { React, useState, useEffect } from "react";
import "./nav.css";
import logoWhite from "../images/mki-logo-white.png"
import SlidingNews from "./slidingNews";
import Menu from "./menu";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

function Nav(props) {
  //Set active link underline
  const active = props.active;
    let homeActive, sportActive, technologyActive, businessActive = false;

    if (active === "Home") {
        homeActive = true;
    }   else homeActive = false;

    
    if (active === "Sport") {
        sportActive = true;
    }   else sportActive = false;

    
    if (active === "Technology") {
        technologyActive = true;
    }   else technologyActive = false;

    
    if (active === "Business") {
        businessActive = true;
    }   else businessActive = false;

  //Check for small screens
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 850);
    };

    handleResize(); // Check initial screen width

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Change css on scroll
  const [isSticky, setIsSticky] = useState(false);
  const changeStyle = () => {
    if (window.scrollY >= 25) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  //Togle the hamburger button
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  window.addEventListener("scroll", changeStyle);

  //Handle Hamburger click
  function hamburgerClick() {
    setHamburgerToggle(!hamburgerToggle);
    
    console.log("click", hamburgerToggle);
  }

  return (
      <div className={isSticky ? 'Nav Nav-sticky' : 'Nav'}>
        <div className={isSticky ? 'nav-bar nav-bar-sticky' : 'nav-bar'}>
          <img className={isSticky ? "logo-sticky logo" : "logo"} alt="logo" src={logoWhite}></img>
          <div className={isSticky ? 'menu menu-sticky' : 'menu'}>
          {smallScreen ? <div className="hamburger" onClick={hamburgerClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div> : <Menu active={props.active} /> }
          </div>
        </div>
        <div className={isSticky ? "top-news-line top-news-line-sticky " : "top-news-line"}>
          <SlidingNews topHeadlines={props.topHeadlines}/>
        </div>
        <div className="hamburger-container" 
          style={hamburgerToggle ? { transform: "translateX(0)" } : { transform: "translateX(-100%)" }} 
          onClick={hamburgerClick} >
        </div>
        <div className="hamburger-menu" style={hamburgerToggle ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }}>
          <div>
            <h2>Navigation</h2>
            <ul className="hamburger-menu-list">
              <li><a href="/" className={homeActive ? "active-link" : "inactive-link"}>Home</a></li>
              <li><a href="/sport" className={sportActive ? "active-link" : "inactive-link"}>Sport</a></li>
              <li><a href="/technology" className={technologyActive ? "active-link" : "inactive-link"}>Technology</a></li>
              <li><a href="/business" className={businessActive ? "active-link" : "inactive-link"}>Business</a></li>
            </ul>
          </div>
          <div className="social-media">
            <span>2023</span>
            <div className="social-media-icons">
              <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram"></img></a>
              <a href="https://www.twitter.com" target="_blank"><img src={twitter} alt="twitter"></img></a>
              <a href="https://www.linkedin.com" target="_blank"><img src={linkedin} alt="linkedin"></img></a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Nav;

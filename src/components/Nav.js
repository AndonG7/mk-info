/* eslint-disable no-restricted-globals */
import { useState } from "react";
import "./nav.css";
import logoWhite from "../images/mki-logo-white.png"
import SlidingNews from "./slidingNews";

function Nav(props) {

  //Change css on scroll
  const [isSticky, setIsSticky] = useState(false);
  const changeStyle = () => {
    if (window.scrollY >= 25) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  window.addEventListener("scroll", changeStyle);


  return (
      <div className={isSticky ? 'Nav Nav-sticky' : 'Nav'}>
        <div className={isSticky ? 'nav-bar nav-bar-sticky' : 'nav-bar'}>
          <img className={isSticky ? "logo-sticky logo" : "logo"} alt="logo" src={logoWhite}></img>
          <div className="menu">
            <span className={isSticky ? 'quote quote-sticky' : 'quote'}>
              <a>Се на едно место</a>
            </span>
          </div>
        </div>
        <div className={isSticky ? "top-news-line top-news-line-sticky " : "top-news-line"}>
          {/* <p style={smallScreen ? {display:'none'} : {display:'block'}}>Now trending: {props.topHeadline.title}... <a href={props.topHeadline.url} target="_blank">Read more</a></p> */}
          <SlidingNews topHeadlines={props.topHeadlines}/>
        </div>
      </div>
  );
}

export default Nav;

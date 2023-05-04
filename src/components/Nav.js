import { useState } from "react";
import "./nav.css";

function Nav(props) {
  //Change css on scroll
  const [isSticky, setIsSticky] = useState(false);
  const changeStyle = () => {
    if (window.scrollY >= 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  window.addEventListener("scroll", changeStyle);


  return (
    <div className={isSticky ? 'Nav Nav-sticky' : 'Nav'}>
      <div className={isSticky ? 'logo logo-sticky' : 'logo'}>MK-Info</div>
      <div className="menu">
        <span className={isSticky ? 'quote quote-sticky' : 'quote'}>
          <a>Don't miss a thing</a>
        </span>
      </div>
    </div>
  );
}

export default Nav;

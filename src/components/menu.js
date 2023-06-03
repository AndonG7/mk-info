import {React, useState, useEffect} from 'react';

function Menu(props) {
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

    return (
        <div className="Menu">
            <ul className='menu-list'>
                <li><a href='/' className={homeActive ? "active-link" : "inactive-link"} >Home</a></li>
                <li><a href='/sport' className={sportActive ? "active-link" : "inactive-link"}>Sport</a></li>
                <li><a href='/technology' className={technologyActive ? "active-link" : "inactive-link"}>Technology</a></li>
                <li><a href='/business' className={businessActive ? "active-link" : "inactive-link"}>Business</a></li>
            </ul>
        </div>
  );
}

export default Menu;
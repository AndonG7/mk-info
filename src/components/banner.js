import {React, useState, useEffect} from 'react';
import './banner.css'

function Banner(props) {

    return (
        <div className="banner" style={{ backgroundImage: `url(${props.img})` }} >
            <div className='banner-fade'></div>
            <h1 className='banner-title'>{props.name} News</h1>
        </div>
  );
}

export default Banner;
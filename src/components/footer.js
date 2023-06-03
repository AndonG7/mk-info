import {React} from 'react';
import './footer.css'
import email from "../images/email.png"
import phone from "../images/phone.png"
import location from "../images/location.png"
 
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className='footer-nav'>
                    <h2>Navigation</h2>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/sport'>Sport</a></li>
                        <li><a href='/technology'>Technology</a></li>
                        <li><a href='/business'>Business</a></li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <ul>
                        <li><img src={email} alt='email'></img>andon4ee@gmail.com</li>
                        <li><img src={phone} alt='phone'></img>+389 555 555 555</li>
                        <li><img src={location} alt='location'></img>Ploshtad Marshal Tito bb 1430 Kavadarci</li>
                    </ul>
                </div>
                <div className='footer-quote'>
                    <h2>All in one place</h2>
                </div>
            </div>
            <div className='copyright'>All rights reserved © MK-Info</div>
        </div>
  );
}

export default Footer;





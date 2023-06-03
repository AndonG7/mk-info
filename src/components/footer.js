import {React} from 'react';
import './footer.css'
 
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
                        <li>Email</li>
                        <li>Phone</li>
                        <li>Address</li>
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





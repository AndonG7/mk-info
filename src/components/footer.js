import {React} from 'react';
import './footer.css'
 
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className='footer-nav'>
                    <h2>Навигација</h2>
                    <ul>
                        <li>Дома</li>
                        <li>Спорт</li>
                        <li>Технологија</li>
                        <li>Бизнис</li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h2>Контакт</h2>
                    <ul>
                        <li>Email</li>
                        <li>Phone</li>
                        <li>Address</li>
                    </ul>
                </div>
                <div className='footer-quote'>
                    <h2>Се на едно место</h2>
                </div>
            </div>
            <div className='copyright'>Сите права се задржани © MK-Info</div>
        </div>
  );
}

export default Footer;





import { Link } from 'react-router-dom';
import logo from '../assets/img/supra_white.png';
import fcb from '../assets/img/pictos/fb_logo.png';
import twitter from '../assets/img/pictos/twitter_logo.png';
import Popup from './Popup';
import { useState } from 'react';
import PopupCgu from './PopupCgu';
import PopupCookies from './PopupCookies';

const Footer = () => {
    const [buttonPopUpCgu, setButtonPopUpCgu] = useState(false);
    const [buttonPopUpCookies, setButtonPopUpCookies] = useState(false);

    return(
        <>
            <footer>
                <div className="links">
                    <div className="logo">
                        <img src={logo} alt="logo de supra esport"/>
                    </div>
                    <div className="follow">
                        <p>FOLLOW US</p>
                        <div className="social">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="lien facebook"/></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={fcb} alt="lien twitter"/></a>
                        </div>
                    </div>
                    <div className="gdpr">
                        <ul>
                            <li>
                                <a onClick={() => setButtonPopUpCgu(true)}>Conditions d'utilisations</a>
                            </li>
                            <li>
                                <a onClick={() => setButtonPopUpCookies(true)}>Gestion des cookies</a>
                            </li>
                            <li>
                                <Link to='/contact'>Nous contacter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2022 SUPRA ESPORT. Tous droits réservés</p>
                </div>
            </footer>
            <Popup trigger={buttonPopUpCgu} setTrigger={setButtonPopUpCgu}>
                <PopupCgu/>
            </Popup>
            <Popup trigger={buttonPopUpCookies} setTrigger={setButtonPopUpCookies}>
                <PopupCookies/>
            </Popup>
        </>
    );
}

export default Footer;

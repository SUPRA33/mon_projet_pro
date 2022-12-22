import logo from '../assets/img/supra_white.png';
import fcb from '../assets/img/pictos/fb_logo.png';
import twitter from '../assets/img/pictos/twitter_logo.png';

const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <div className="logo">
                    <img src={logo} alt="logo de supra esport"/>
                </div>
                <div className="socials">
                    <span>FOLLOW US</span>
                    <div className="links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={fcb} alt="lien twitter"/></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="lien facebook"/></a>
                    </div>
                </div>
                <div className="copyright">
                    <span>&copy; 2022 SUPRA ESPORT. Tous droits réservés</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

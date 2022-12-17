import { Link } from 'react-router-dom';
import logo from '../assets/img/supra_white.png';
import Accueil from './Home';

const Header = () => {
    return(
        <header>
            <nav className="menu_nav">
                <div className="containerLogo">
                    <img src={logo} alt="logo supra" />
                </div>
                <ul>
                    <li className="btn"><Link to='/'>ACCUEIL</Link></li>
                    <li className="btn"><Link to='/roster'>EQUIPE</Link></li>
                    <li className="btn"><Link to='/shop'>BOUTIQUE</Link></li>
                    <li className="btn"><Link to='/sponsors'>SPONSORS</Link></li>
                    <li className="btn"><Link to='/contact'>CONTACT</Link></li>
                </ul>
                <div className="containerLogo"></div>
            </nav>
        </header>
    );
}

export default Header;
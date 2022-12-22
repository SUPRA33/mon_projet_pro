import { Link } from 'react-router-dom';
import logo from '../assets/img/supra_white.png';
import { useState } from 'react';

const Header = () => {

    const [displayLinks, setDisplayLinks] = useState(false);

    const handleDisplayLinks = () => {
        setDisplayLinks(!displayLinks)
    }


    return(
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo supra" />
                </div>
                <ul className={`navbar_links ${displayLinks ? "" : "hide_nav"}`}>
                    <li>
                        <Link to='/'>ACCUEIL</Link>
                    </li>
                    <li>
                        <Link to='/roster'>EQUIPE</Link>
                    </li>
                    <li>
                        <Link to='/shop'>BOUTIQUE</Link>
                    </li>
                    <li>
                        <Link to='/sponsors'>SPONSORS</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                </ul>
                <div className="logo"></div>
                <button className="burger" onClick={handleDisplayLinks}>
                    <i className="fa-solid fa-bars fa-3x"></i>
                </button>
            </nav>
        </header>
    );
}

export default Header;
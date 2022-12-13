import logo from '../assets/img/supra_white.png';

const Header = () => {
    return(
        <header>
            <nav className="menu_nav">
                <div className="containerLogo">
                    <img src={logo} alt="logo supra" />
                </div>
                <ul>
                    <li className="btn"><a href="index.html">ACCUEIL</a></li>
                    <li className="btn"><a href="equipe.html">EQUIPE</a></li>
                    <li className="btn"><a href="boutique.html">BOUTIQUE</a></li>
                    <li className="btn"><a href="sponsors.html">SPONSORS</a></li>
                    <li className="btn"><a href="contact.html">CONTACT</a></li>
                </ul>
                <div className="containerLogo"></div>
            </nav>
        </header>
    );
}

export default Header;
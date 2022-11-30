import './assets/scss/_header.scss';

const Header = () => {
    return(
        <header>
            <nav class="menu_nav">
                <div class="containerLogo">
                    <img/>
                </div>
                <ul>
                    <li class="btn"><a href="index.html">ACCUEIL</a></li>
                    <li class="btn"><a href="equipe.html">EQUIPE</a></li>
                    <li class="btn"><a href="boutique.html">BOUTIQUE</a></li>
                    <li class="btn"><a href="sponsors.html">SPONSORS</a></li>
                    <li class="btn"><a href="contact.html">CONTACT</a></li>
                </ul>
                <div class="containerLogo"></div>
            </nav>
        </header>
    );
}

export default Header;
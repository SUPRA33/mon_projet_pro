import { useEffect, useState } from "react";
import AddTeam from "./AddComponents/AddTeam";
import AddMember from "./AddComponents/AddMember";
import AddResult from "./AddComponents/AddResult";
import AddSponsor from "./AddComponents/AddSponsor";
import AddShopItem from "./AddComponents/AddShopItem";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/supra_white.png';
import jwtDecode from "jwt-decode";
import TeamPanel from "./TeamPanel";

const AdminPanel = () => {

    const navigate = useNavigate();

    // Je crée une fonction qui décode le token grace à jwtDecode.
    const checkJWT = (jwt) => {
        try {
          const decoded = jwtDecode(jwt);
          return decoded;
        } catch (error) {
          return null;
        }
    }

    useEffect(() => {
        // Je vérifie si l'utilisateur à un token valide avec le role "admin".
        const jwt = localStorage.getItem('jwt');
        
        if (!jwt || !checkJWT(jwt).role === 'admin') {
            // Si il n'a pas de token valide ou pas le role "admin" je le redirige vers la page de login.
            navigate('/admin');
            alert("Vous devez être administrateur.")
        }
    }, []);

    const [panelToDisplay, setPanelToDisplay] = useState(null);

    const handlePanelClick = (panel) => {
        setPanelToDisplay(panel);
        handleDisplayLinks();
    };

    const renderPanel = () => {
        if (panelToDisplay === 'team') {
            return <TeamPanel/>
        }
        else if (panelToDisplay === 'member') {
            return <AddMember/>
        }
        else if (panelToDisplay === 'result') {
            return <AddResult/>
        }
        else if (panelToDisplay === 'sponsor') {
            return <AddSponsor/>
        }
        else if (panelToDisplay === 'shopItem') {
            return <AddShopItem/>
        }
    };

    const [displayLinks, setDisplayLinks] = useState(false);

    const handleDisplayLinks = () => {
        setDisplayLinks(!displayLinks)
    }

    const logOut = () => {
        localStorage.removeItem('jwt');
        navigate('/admin');
    };

        return(
            <>
                <header id="adminHeader">
                    <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo supra" />
                    </div>
                        <ul className={`navbar_links ${displayLinks ? "" : "hide_nav"}`}>
                            <li>
                                <a onClick={() => handlePanelClick('team')}>Ajouter une équipe</a>
                            </li>
                            <li>
                                <a onClick={() => handlePanelClick('member')}>Ajouter un membre</a>
                            </li>
                            <li>
                                <a onClick={() => handlePanelClick('result')}>Ajouter un résultat</a>
                            </li>
                            <li>
                                <a onClick={() => handlePanelClick('sponsor')}>Ajouter un sponsor</a>
                            </li>
                            <li>
                                <a onClick={() => handlePanelClick('shopItem')}>Ajouter à la boutique</a>
                            </li>
                            <li>
                                <a onClick={() => logOut()}>Se déconnecter</a>
                            </li>
                        </ul>
                        <div className="logo"></div>
                        <button className="burger" onClick={handleDisplayLinks}>
                            <i className="fa-solid fa-bars fa-3x"></i>
                        </button>
                    </nav>
                </header>
                <main>
                    <section className="adminPanel">
                        <h2><span>PANEL D'</span>ADMINISTRATION</h2>
                        <div className="container">
                            <div className="buttons">
                                <button onClick={() => handlePanelClick('team')}>EQUIPES</button>
                                <button onClick={() => handlePanelClick('member')}>MEMBRES</button>
                                <button onClick={() => handlePanelClick('result')}>RESULTATS</button>
                                <button onClick={() => handlePanelClick('sponsor')}>SPONSORS</button>
                                <button onClick={() => handlePanelClick('shopItem')}>BOUTIQUE</button>
                                <button onClick={() => logOut()}>Se déconnecter</button>
                            </div>
                            {renderPanel()}
                        </div>
                    </section>
                </main>
            </>
        );
}

export default AdminPanel;
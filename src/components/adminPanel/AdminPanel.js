import { useState } from "react";
import AddTeam from "./AddTeam";
import AddMember from "./AddMember";
import AddResult from "./AddResult";
import AddSponsor from "./AddSponsor";
import AddShopItem from "./AddShopItem";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/supra_white.png';

const AdminPanel = () => {

    const [panelToDisplay, setPanelToDisplay] = useState(null);

    const handlePanelClick = (panel) => {
        setPanelToDisplay(panel);
        handleDisplayLinks();
    };

    const renderPanel = () => {
        if (panelToDisplay === 'team') {
            return <AddTeam/>
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

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('jwt');
        navigate('/admin');
    };

    const [displayLinks, setDisplayLinks] = useState(false);

    const handleDisplayLinks = () => {
        setDisplayLinks(!displayLinks)
    }

    // const req = new XMLHttpRequest();
    // const header = req.headers.authorization;

    // if (!header) {
    //     alert("Vous devez être administrateur.")
    //     navigate('/');
    // } else {
        
    // }

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
                            <button onClick={() => handlePanelClick('team')}>Ajouter une équipe</button>
                            <button onClick={() => handlePanelClick('member')}>Ajouter un membre</button>
                            <button onClick={() => handlePanelClick('result')}>Ajouter un résultat</button>
                            <button onClick={() => handlePanelClick('sponsor')}>Ajouter un sponsor</button>
                            <button onClick={() => handlePanelClick('shopItem')}>Ajouter à la boutique</button>
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
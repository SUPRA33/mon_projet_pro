import { useState } from "react";
import AddTeam from "./AddTeam";
import AddMember from "./AddMember";
import AddResult from "./AddResult";
import AddSponsor from "./AddSponsor";
import AddShopItem from "./AddShopItem";
import { useNavigate } from "react-router-dom";
import { Next } from "react-bootstrap/esm/PageItem";

const AdminPanel = () => {

    const jwtLocalStorage = localStorage.getItem('jwt');

    const [panelToDisplay, setPanelToDisplay] = useState(null);

    const handlePanelClick = (panel) => {
        setPanelToDisplay(panel)
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


    return(
        <main>
            <section className="adminPanel">
                <h2>PANEL D'ADMINISTRATION</h2>
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
    );
}

export default AdminPanel;
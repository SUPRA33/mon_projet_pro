import { useState } from "react";
import AddShopItem from "./AddComponents/AddShopItem";
import AddSponsor from "./AddComponents/AddSponsor";
import AddTeam from "./AddComponents/AddTeam";
import DisplayTeams from "./DisplayComponents/DisplayTeams";
import UpdateTeams from "./UpdateComponents/UpdateTeams";

const TeamPanel = () => {

    const [panelToDisplay, setPanelToDisplay] = useState(null);

    const handlePanelClick = (panel) => {
        setPanelToDisplay(panel);
        handleDisplayLinks();
    };

    const renderPanel = () => {
        if (panelToDisplay === 'display') {
            return <DisplayTeams/>
        }
        else if (panelToDisplay === 'add') {
            return <AddTeam/>
        }
        else if (panelToDisplay === 'update') {
            return <UpdateTeams/>
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

    return(
        <>
            <div className="crud_buttons">
                <button onClick={() => handlePanelClick('display')}>Afficher les équipes</button>
                <button onClick={() => handlePanelClick('add')}>Ajouter une équipe</button>
                <button onClick={() => handlePanelClick('update')}>Mettre à jour une équipe</button>
                <button>Supprimer une équipe</button>
            </div>
            {renderPanel()}
        </>
    );
}

export default TeamPanel;
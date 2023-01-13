import { useState } from "react";
import AddTeam from "./AddComponents/AddTeam";
import DeleteTeam from "./DeleteComponents/DeleteTeam";
import DisplayTeam from "./DisplayComponents/DisplayTeam";
import UpdateTeam from "./UpdateComponents/UpdateTeam";

const TeamPanel = () => {

    const [panelToDisplay, setPanelToDisplay] = useState(null);

    const handlePanelClick = (panel) => {
        setPanelToDisplay(panel);
        handleDisplayLinks();
    };

    const renderPanel = () => {
        if (panelToDisplay === 'display') {
            return <DisplayTeam/>
        }
        else if (panelToDisplay === 'add') {
            return <AddTeam/>
        }
        else if (panelToDisplay === 'update') {
            return <UpdateTeam/>
        }
        else if (panelToDisplay === 'delete') {
            return <DeleteTeam/>
        }
    };

    const [displayLinks, setDisplayLinks] = useState(false);

    const handleDisplayLinks = () => {
        setDisplayLinks(!displayLinks)
    }

    return(
        <>
            <div className="crud_buttons">
                <button className={panelToDisplay === 'display' ? 'buttonSelected' : ''} onClick={() => handlePanelClick('display')}><i className="fa-solid fa-eye"></i></button>
                <button className={panelToDisplay === 'add' ? 'buttonSelected' : ''}  onClick={() => handlePanelClick('add')}><i className="fa-solid fa-plus"></i></button>
                <button className={panelToDisplay === 'update' ? 'buttonSelected' : ''}  onClick={() => handlePanelClick('update')}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className={panelToDisplay === 'delete' ? 'buttonSelected' : ''}  onClick={() => handlePanelClick('delete')}><i className="fa-solid fa-trash-can"></i></button>
            </div>
            {renderPanel()}
        </>
    );
}

export default TeamPanel;
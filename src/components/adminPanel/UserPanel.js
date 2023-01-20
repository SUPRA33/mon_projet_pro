import { useState } from "react";
import AddUser from "./AddComponents/AddUser";
import DisplayUser from "./DisplayComponents/DisplayUser";

const UserPanel = () => {

    const [panelToDisplay, setPanelToDisplay] = useState(null);

    const handlePanelClick = (panel) => {
        setPanelToDisplay(panel);
        handleDisplayLinks();
    };

    const renderPanel = () => {
        if (panelToDisplay === 'display') {
            return <DisplayUser/>
        }
        else if (panelToDisplay === 'add') {
            return <AddUser/>
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

export default UserPanel;
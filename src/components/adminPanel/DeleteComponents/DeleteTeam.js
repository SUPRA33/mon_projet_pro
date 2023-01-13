import { useEffect, useState } from "react";

const DeleteTeam = () => {

    const [selectedTeam, setSelectedTeam] = useState(null);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        (async() => {
            const getTeamsData = await fetch("http://localhost/api/teams");
            const teamsData = await getTeamsData.json();
            setTeams(teamsData);
        })();
    },[]);

    const handleSelectionChange = (e) => {
        const selectedId = e.target.value;
        // Je trouve l'équipe qui correspond à cet id.
        const selectedTeam = teams.find((team) => team.id == selectedId);
        setSelectedTeam(selectedTeam);
    };

    const handleClick = async (e) => {
        e.preventDefault();
      
        // J'affiche une fenêtre pour valider la suppression de l'équipe.
        const isSure = window.confirm("Etes vous sûr de vouloir supprimer cette équipe ?");
      
        // Si je valide, je supprime l'équipe
        if (isSure) {
          const jwtLocalStorage = localStorage.getItem('jwt');
          const token = JSON.parse(jwtLocalStorage).access_token;
      
          await fetch(`http://localhost/api/teams/${selectedTeam.id}`, {
            method: 'DELETE',
            headers: {
              authorization: 'Bearer ' + token,
              'Content-Type': 'application/json'
            }
          });
          alert("Opération réussie avec succès.");
        }
      }

    return(
        <div className="display">
            <select name="teamSelectOption" onChange={handleSelectionChange}>
            <option>Selectionner une équipe à supprimer</option>
            {teams.map((team) => {
                return (
                <option value={team.id} key={team.id}>{team.team_name}</option>
                );
            })}
            </select>
            {/* J'affiche les informations de l'équipe sélectionnée */}
            {selectedTeam && (
            <>
                <div className="displayItem">
                    <p>id : {selectedTeam.id}</p>
                    <p>team_name : {selectedTeam.team_name}</p>
                    <p>logo : {selectedTeam.logo}</p>
                </div>
                <div className="deleteItem">
                    <button onClick={handleClick}>Valider</button>
                </div>
            </>
            )}
        </div>
    );
}

export default DeleteTeam;
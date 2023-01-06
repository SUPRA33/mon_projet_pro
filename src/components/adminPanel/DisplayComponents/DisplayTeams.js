import { useEffect, useState } from "react";

const DisplayTeams = () => {

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

    return(
        <div className="display">
        <select name="teamSelectOption" onChange={handleSelectionChange}>
          <option>Selectionner une équipe à afficher</option>
          {teams.map((team) => {
            return (
              <option value={team.id} key={team.id}>{team.team_name}</option>
            );
          })}
        </select>
        {/* J'affiche les informations de l'équipe sélectionnée */}
        {selectedTeam && (
          <div className="displayItem">
            <p>id : {selectedTeam.id}</p>
            <p>team_name : {selectedTeam.team_name}</p>
            <p>logo : {selectedTeam.logo}</p>
          </div>
        )}
      </div>
    );
}

export default DisplayTeams;
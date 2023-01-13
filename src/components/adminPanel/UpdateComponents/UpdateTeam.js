import { useEffect, useState } from "react";

const UpdateTeam = () => {

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const team_name = e.target.team_name.value;
        const logo = e.target.logo.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        await fetch(`http://localhost/api/teams/${selectedTeam.id}`, {
            method: 'PATCH',
            headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team_name,
                logo
            })
        });
        alert("Opération réussie avec succès.");
    }

    return(
        <div className="display">
        <select name="teamSelectOption" onChange={handleSelectionChange}>
          <option>Selectionner une équipe à mettre à jour</option>
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
                <div className="updateItem">
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="team_name">Nom d'équipe :</label>
                            <input type="text" name="team_name" />
                        </div>
                        <div className="item">
                            <label htmlFor="logo">Logo :</label>
                            <input type="text" name="logo" placeholder="exemple : xesport.png" />
                        </div>
                        <div className="submit">
                            <input type="submit" value="Valider" />
                        </div>
                    </form>
                </div>
          </>
        )}
      </div>
    );
}

export default UpdateTeam;
import { useEffect, useState } from "react";

const AddTeam = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        (async() => {
            const getTeamsData = await fetch("http://localhost/api/teams");
            const teamsData = await getTeamsData.json();
            setTeams(teamsData);
        })();
    },[]);

    return(
        <>
            <form>
                <div className="item">
                    <label htmlFor="team_name">Nom d'équipe :</label>
                    <input type="text" name="team_name" />
                </div>
                <div className="item">
                    <label htmlFor="logo">Logo :</label>
                    <input type="text" name="logo" placeholder="exemple : xesport.jpg" />
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
        
    );
}

export default AddTeam;
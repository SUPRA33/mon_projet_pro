import { useEffect, useState } from "react";

const AddResult = () => {

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
                    <label htmlFor="date">Date du match* :</label>
                    <input type="date" name="date" />
                </div>

                <div className="item">
                    <label htmlFor="score_home">Score domicile :</label>
                    <input type="number" min="0" max="10" name="score_home"/>
                </div>

                <div className="item">
                    <label htmlFor="score_ext">Score extérieur :</label>
                    <input type="number" min="0" max="10" name="score_ext"/>
                </div>

                <div className="item">
                    <label htmlFor="teamHomeSelectOption">Equipe domicile* :</label>
                    <select name="team_home">
                        {teams.map((team) => {
                            return (
                                <option value={team.id}>{team.team_name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="item">
                <label htmlFor="teamExtSelectOption">Equipe extérieur* :</label>
                    <select name="team_ext">
                        {teams.map((team) => {
                            return (
                                <option value={team.id}>{team.team_name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
    );
}

export default AddResult;
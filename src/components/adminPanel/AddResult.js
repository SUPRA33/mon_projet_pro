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

    const handleSubmit = (event) => {
        event.preventDefault();

        const date = event.target.date.value;
        const score_home = event.target.score_home.value;
        const score_ext = event.target.score_ext.value;
        const team_home_id = event.target.teamHomeSelectOption.value;
        const team_ext_id = event.target.teamExtSelectOption.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        fetch('http://localhost/api/results', {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date,
                score_home,
                score_ext,
                team_home_id,
                team_ext_id
            })
        });
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="team_home">Equipe domicile* :</label>
                    <select name="teamHomeSelectOption">
                        {teams.map((team) => {
                            return (
                                <option value={team.id}>{team.team_name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="item">
                <label htmlFor="team_ext">Equipe extérieur* :</label>
                    <select name="teamExtSelectOption">
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
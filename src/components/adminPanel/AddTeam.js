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

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.team_name.value;
        const logo = event.target.logo.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        fetch('http://localhost/api/teams', {
            authorization: 'Bearer'+ ' ' + token,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                logo
            })
        });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
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
const AddTeam = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const team_name = event.target.team_name.value;
        const logo = event.target.logo.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

       await fetch('http://localhost/api/teams', {
            method: 'PUT',
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
        <>
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
        </>
        
    );
}

export default AddTeam;
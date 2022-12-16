import { useEffect, useState } from "react";

const AddMember = () => {

    const [teams, setTeams] = useState([]);

    const [category, setCategory] = useState(null)

    useEffect(() => {
        (async() => {
            const getTeamsData = await fetch("http://localhost/api/teams");
            const teamsData = await getTeamsData.json();
            setTeams(teamsData);
        })();
    },[]);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        
        setCategory(category)
    }
    
    return(
        <>
            <form>
                <div className="item">
                    <label htmlFor="civilitySelectOption">Catégorie* :</label>
                    <select name="civility" id="civility">
                        <option>Monsieur</option>
                        <option>Madame</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="last_name">Nom* :</label>
                    <input type="text" name="last_name"/>
                </div>
                <div className="item">
                    <label htmlFor="first_name">Prénom* :</label>
                    <input type="text" name="first_name"/>
                </div>
                <div className="item">
                    <label htmlFor="nickname">Pseudo* :</label>
                    <input type="text" name="nickname"/>
                </div>
                <div className="item">
                    <label htmlFor="nationality">Nationalité* :</label>
                    <input type="text" name="nationality"/>
                </div>
                <div className="item">
                    <label htmlFor="date_birth">Date de naissance* :</label>
                    <input type="date" name="date_birth"/>
                </div>
                <div className="item">
                    <label htmlFor="city_birth">Ville de naissance* :</label>
                    <input type="text" name="city_birth"/>
                </div>
                <div className="item">
                    <label htmlFor="email">Email* :</label>
                    <input type="email" name="email"/>
                </div>
                <div className="item">
                    <label htmlFor="adress_1">Adresse 1* :</label>
                    <input type="text" name="adress_1"/>
                </div>
                <div className="item">
                    <label htmlFor="adress_2">Adresse 2 :</label>
                    <input type="text" name="adress_2"/>
                </div>
                <div className="item">
                    <label htmlFor="city">Ville* :</label>
                    <input type="text" name="city"/>
                </div>
                <div className="item">
                    <label htmlFor="postal_code">Code postal* :</label>
                    <input type="number" name="postal_code"/>
                </div>
                <div className="item">
                    <label htmlFor="country">Pays* :</label>
                    <input type="text" name="country"/>
                </div>
                <div className="item">
                    <label htmlFor="image">Image :</label>
                    <input type="text" name="image" placeholder="exemple : image.jpg"/>
                </div>
                <div className="item">
                    <label htmlFor="team_id">Equipe :</label>
                    <select name="teamSelectOption">
                        {teams.map((team) => {
                            return(
                                <option value={team.id}>{team.team_name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="category">Categorie* :</label>
                    <select name="categorySelectOption" onChange={handleCategoryChange}>
                        <option value="joueur">Joueur</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="role">Role* :</label>
                    <select name="roleSelectOption">
                        {!category || category === "joueurs" ? (
                            <>
                                <option value="joueur">Joueur</option>
                                <option value="capitaine">Capitaine</option>
                            </>
                        ) : (
                            <>
                                <option value="coach">Coach</option>
                                <option value="manager">Manager</option>
                            </>
                        )}
                        
                    </select>
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
    );
}

export default AddMember;
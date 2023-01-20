const AddUser = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const civility = event.target.civilitySelectOption.value;
        const last_name = event.target.last_name.value;
        const first_name = event.target.first_name.value;
        const date_birth = event.target.date_birth.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const adress_1 = event.target.adress_1.value;
        const adress_2 = event.target.adress_2.value;
        const city = event.target.city.value;
        const postal_code = event.target.postal_code.value;
        const country = event.target.country.value;
        const role = event.target.roleSelectOption.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        await fetch('http://localhost/api/users', {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                civility,
                last_name,
                first_name,
                date_birth,
                email,
                password,
                adress_1,
                adress_2,
                city,
                postal_code,
                country,
                role
            })
        });
        alert("Opération réussie avec succès.");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <label htmlFor="civility">Civilité :</label>
                    <select name="civilitySelectOption">
                        <option value="monsieur">Monsieur</option>
                        <option value="madame">Madame</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="last_name">Nom :</label>
                    <input type="text" name="last_name"/>
                </div>
                <div className="item">
                    <label htmlFor="first_name">Prénom :</label>
                    <input type="text" name="first_name"/>
                </div>
                <div className="item">
                    <label htmlFor="date_birth">Date de naissance :</label>
                    <input type="date" name="date_birth"/>
                </div>
                <div className="item">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email"/>
                </div>
                <div className="item">
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password"/>
                </div>
                <div className="item">
                    <label htmlFor="adress_1">Adresse 1 :</label>
                    <input type="text" name="adress_1"/>
                </div>
                <div className="item">
                    <label htmlFor="adress_2">Adresse 2* :</label>
                    <input type="text" name="adress_2"/>
                </div>
                <div className="item">
                    <label htmlFor="city">Ville :</label>
                    <input type="text" name="city"/>
                </div>
                <div className="item">
                    <label htmlFor="postal_code">Code postal :</label>
                    <input type="text" name="postal_code"/>
                </div>
                <div className="item">
                    <label htmlFor="country">Pays :</label>
                    <input type="text" name="country"/>
                </div>
                <div className="item">
                    <label htmlFor="roleSelectOption">Rôle :</label>
                    <select name="roleSelectOption">
                        <option value="user">Utilisateur</option>
                        <option value="admin">Administrateur</option>
                    </select>
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
        
    );
}

export default AddUser;
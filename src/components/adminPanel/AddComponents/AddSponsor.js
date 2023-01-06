
const AddSponsor = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const sponsor_name = event.target.sponsor_name.value;
        const description = event.target.description.value;
        const link = event.target.link.value;
        const logo = event.target.logo.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        fetch('http://localhost/api/sponsors', {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sponsor_name,
                description,
                link,
                logo
            })
        });
        alert("Opération réussie avec succès.");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <label htmlFor="sponsor_name">Nom sponsor* :</label>
                    <input type="text" name="sponsor_name"/>
                </div>

                <div className="item">
                    <label htmlFor="description">Description :</label>
                    <textarea name="description" cols="35" rows="15"></textarea>
                </div>

                <div className="item">
                    <label htmlFor="link">Lien url :</label>
                    <input type="text" name="link"/>
                </div>
                <div className="item">
                    <label htmlFor="logo">Logo* :</label>
                    <input type="text" name="logo" placeholder="exemple : xesport.jpg" />
                </div>
                <div className="submit">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </>
    );
}

export default AddSponsor;
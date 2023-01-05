import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate();

    const handleSubmit = async(event, req, res) => {
        event.preventDefault();

        const email = event.target.user_email.value;
        const password = event.target.password.value;

        const jwtResponse = await fetch('http://localhost/api/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        
        const loginData = await jwtResponse.json();

        if (jwtResponse.status === 200) {
            localStorage.setItem('jwt', JSON.stringify(loginData));
            navigate('/admin/panel');
        } else {
            alert("La combinaison email/mot de passe ne correspond pas.")
            navigate('/');
        }
    }

    return(
        <main>
            <section className="adminPanel">
                <h2><span>PANEL D'</span>ADMINISTRATION</h2>
                <div className="container">
                    <h3>Connexion :</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="user_email">Email :</label>
                            <input type="email" name="user_email"/>
                        </div>
                        <div className="item">
                            <label htmlFor="password">Mot de passe :</label>
                            <input type="password" name="password"/>
                        </div>
                        <div className="submit">
                        <input type="submit" value="Se connecter" />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default AdminLogin;
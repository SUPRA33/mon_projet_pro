import banner from "../assets/img/banner_contact.jpg"
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.mail.value);

        const last_name = event.target.last_name.value;
        const first_name = event.target.first_name.value;
        const email = event.target.mail.value;
        const message_object = event.target.objSelectOption.value;
        const message = event.target.message_send.value;

        const jwtLocalStorage = localStorage.getItem('jwt');
        const token = JSON.parse(jwtLocalStorage).access_token;

        fetch('http://localhost/api/contact', {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                last_name,
                first_name,
                email,
                message_object,
                message
            })
        });
        
    }

    return(
        <>
            <Header/>
            <main>
                <section className="banner">
                    <img src={banner} alt="bannière de contact"/>
                </section>
                <section className="contact">
                    <h2>CONTACTEZ NOUS</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="infoContainer">
                            <div className="info">
                                <div className="content">
                                    <label htmlFor="last_name">Nom*</label>
                                    <input type="text" name="last_name"/>
                                </div>
                                <div className="content">
                                    <label htmlFor="mail">Email*</label>
                                    <input type="email" name="mail"/>
                                </div>
                                <div className="content">
                                    <label htmlFor="object">Objet*</label>
                                    <select name="objSelectOption">
                                        <option value="" id="chooseObject">-- Choisissez un objet --</option>
                                        <option>Boutique</option>
                                        <option>Recrutement</option>
                                        <option>Sponsor</option>
                                        <option>Autres</option>
                                    </select>
                                </div>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <label htmlFor="first_name">Prénom*</label>
                                    <input type="text" name="first_name"/>
                                </div>
                                <div className="content">
                                    <label htmlFor="number">Téléphone</label>
                                    <input type="tel" id="number" name="number"/>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message*</label>
                            <textarea name="message_send" cols="80" rows="8"></textarea>
                        </div>
                        <div>
                            <button role="button">Envoyer</button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Contact;
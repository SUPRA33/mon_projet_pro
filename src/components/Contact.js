import banner from "../assets/img/banner_contact.jpg"
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const last_name = e.target.last_name.value;
        const first_name = e.target.first_name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const message_object = e.target.message_object.value;
        const message = e.target.message.value;

        if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
        }
        if (last_name && first_name && email && message) {
            alert("Message envoyé avec succès.")
        }

        fetch('http://localhost/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                last_name,
                first_name,
                phone,
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
                    <h2>CONTACT<span>EZ NOUS</span></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="infoContainer">
                            <div className="info">
                                <div className="content">
                                    <label htmlFor="last_name">Nom*</label>
                                    <input type="text" name="last_name" placeholder="Nom" onChange={e=>setLastName(e.target.value)}/>
                                    {error && lastName.length <= 0 ?
                                    <label className="error">Nom ne peut être vide</label>:""}
                                </div>
                                <div className="content">
                                    <label htmlFor="first_name">Prénom*</label>
                                    <input type="text" name="first_name" placeholder="Prénom" onChange={e=>setFirstName(e.target.value)}/>
                                    {error && firstName.length <= 0  ?
                                    <label className="error">Prénom ne peut être vide</label>:""}
                                </div>
                            </div>

                            <div className="info">
                                <div className="content">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" name="email" placeholder="utilisateur@gmail.com" onChange={e=>setEmail(e.target.value)}/>
                                    {error && email.length <= 0  ?
                                    <label className="error">Email ne peut être vide</label>:""}
                                </div>
                                <div className="content">
                                    <label htmlFor="phone">Téléphone</label>
                                    <input type="tel" name="phone" placeholder="06372869XX"/>
                                </div>
                            </div>

                            <div className="info">
                                <div className="content">
                                    <label htmlFor="object">Objet*</label>
                                    <select name="message_object">
                                        <option value="" id="chooseObject">-- Choisissez un objet --</option>
                                        <option>Boutique</option>
                                        <option>Recrutement</option>
                                        <option>Sponsor</option>
                                        <option>Autres</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message*</label>
                            <textarea name="message" cols="80" rows="8" placeholder="Veuillez saisir votre demande." onChange={e=>setMessage(e.target.value)}></textarea>
                            {error && message.length <= 0  ?
                            <label className="error">Message ne peut être vide</label>:""}
                            <p className="field_required">* Champ obligatoire</p>
                        </div>
                        <div>
                            <button>Envoyer</button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Contact;
import banner from "../assets/img/banner_contact.jpg"
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return(
        <>
            <Header/>
            <main>
                <section className="banner">
                    <img src={banner} alt="bannière de contact"/>
                </section>
                <section className="contact">
                    <h2>CONTACTEZ NOUS</h2>
                    <form onSubmit="{}">
                        <div className="infoContainer">
                            <div className="info">
                                <div className="content">
                                    <label htmlFor="lastname">Nom*</label>
                                    <input type="text" id="lastname" name="lastname"/>
                                </div>
                                <div className="content">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" name="email"/>
                                </div>
                                <div className="content">
                                    <label htmlFor="objSelectOption">Objet*</label>
                                    <select name="object" id="objSelectOption">
                                        <option value="" id="chooseObject">-- Choisissez un objet --</option>
                                        <option value="shop">Boutique</option>
                                        <option value="recruitment">Recrutement</option>
                                        <option value="sponsor">Sponsor</option>
                                        <option value="other">Autres</option>
                                    </select>
                                </div>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <label htmlFor="firstname">Prénom*</label>
                                    <input type="text" id="firstname" name="firstname"/>
                                </div>
                                <div className="content">
                                    <label htmlFor="number">Téléphone*</label>
                                    <input type="tel" id="number" name="number"/>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message*</label>
                            <textarea name="message" id="message" cols="80" rows="8"></textarea>
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
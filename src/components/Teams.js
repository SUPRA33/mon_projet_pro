import Footer from "./Footer";
import Header from "./Header";
import banner from "../assets/img/banner_team.jpg"

const Teams = () => {
    return(
        <>
            <Header/>
            <section className="banner">
                    <img src={banner} alt="bannière d'équipe'"/>
            </section>
            <Footer/>
        </>
    );
}

export default Teams;
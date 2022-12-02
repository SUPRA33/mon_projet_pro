import banner from '../assets/img/banner_accueil.png';
import lanImg from '../assets/img/lan.jpg';
import line from '../assets/img/trait.svg';

const Accueil = () => {
    return(
        <main>
            <section className="banner">
                <img src={banner} alt="bannière de supra esport"/>
            </section>
            <section className="intro">
                <div className="containerIntro">
                    <div>
                        <img src={lanImg} alt="lan valorant champions 2021"/>
                    </div>
                    <div className="introText">
                        <h1>NOUS SOMMES SUPRA ESPORT</h1>
                        <img src={line} alt="" className="trait" />
                        <p>
                        Bienvenue sur le site de la <strong>SUPRA ESPORT</strong>, une
                        équipe Esport Française, fondée sous loi 1901 par Romain BERTAUD
                        fin octobre 2020. Basé sur Valorant, nous nous efforçons de
                        construire une équipe la plus performante possible. Nous
                        participons à différents événement (tournois, LAN…) accompagné de
                        notre STAFF et à l'aide de nos partenaires uniques qui nous
                        démarquent de la concurrence. Pour le futur, nous voulons être un
                        acteur majeur dans le développement de l'Esport sur le territoire,
                        inculquer nos valeurs et former nos athlètes esportif dés demain.
                        </p>
                    </div>
                </div>
            </section>
            <section className='results'>
                <div className='containerResults'>
                    <div className='textResult'>
                        <h2>Nos résultats</h2>
                        <img src={line} alt=""/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Accueil;
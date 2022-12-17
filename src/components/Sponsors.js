import { useEffect, useState } from "react";
import banner from '../assets/img/banner_sponsor.jpg';
import Footer from "./Footer";
import Header from "./Header";

const Sponsors = () => {

    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        (async() => {
            const getSponsorsData = await fetch("http://localhost/api/sponsors");
            const sponsorsData = await getSponsorsData.json();
            setSponsors(sponsorsData);
        })();
    },[]);

    return(
        <>
            <Header/>
            <main>
                <section className="banner ">
                    <img src={banner} alt="" />
                </section>
                <section className="sponsors">
                    <h2>NOS SPONSORS</h2>
                    <div className="container">
                        {sponsors.map((sponsor) => {
                                    return(
                                        <div className="sponsor">
                                            <div className="logo">
                                                <img src={`http://localhost/images/sponsors/${sponsor.logo}`}/>
                                            </div>
                                            <div className="infos">
                                                <h3>{sponsor.sponsor_name} :</h3>
                                                <p>{sponsor.description}</p>
                                                <a href={sponsor.link} target="_blank">{sponsor.link}</a>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </section>
            </main>
            <Footer/>
        </>

    );
}

export default Sponsors;
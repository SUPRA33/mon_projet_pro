import Footer from "./Footer";
import Header from "./Header";
import banner from "../assets/img/banner_team.jpg"
import { useEffect, useState } from "react";

const Roster = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        (async() => {
            const getMembersData = await fetch("http://localhost/api/members");
            const membersData = await getMembersData.json();
            setMembers(membersData);
        })();
    },[]);

    return(
        <>
            <Header/>
            <main>
                <section className="banner">
                    <img src={banner} alt="bannière d'équipe'"/>
                </section>
                <section className="roster">
                    <h2>NOTRE ROSTER</h2>
                    <div className="container">
                        <h3>STAFF</h3>
                        <div className="staff">
                            {members.map((member, index) => {
                                return(
                                    member.category === "staff" &&
                                        <div className="member" key={index}>
                                            <h4>{member.role}</h4>
                                            <img src={`http://localhost/images/members/${member.image}`}/>
                                            <h4>{member.nickname}</h4>
                                        </div>
                                );
                            })}
                        </div>
                        <h3>JOUEURS</h3>
                        <div className="players">
                            {members.map((member, index) => {
                                return(
                                    member.category === "joueur" &&
                                        <div className="member" key={index}>
                                            <h4>{member.role}</h4>
                                            <img src={`http://localhost/images/members/${member.image}`}/>
                                            <h4>{member.nickname}</h4>
                                        </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Roster;
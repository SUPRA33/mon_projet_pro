import { useEffect, useState } from "react";

const ResultList = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        (async() => {
            const getResultsData = await fetch("http://localhost/api/results");
            const resultsData = await getResultsData.json();
            setResults(resultsData);
        })();
    },[]);

    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}

    return(
        <section className="results">
            <h2>Nos résultats</h2>
            <div className="container">
                {results.map((result, index) => {
                    const date = new Date(result.date)
                    return(
                        index < 4 &&
                        <div className="item">
                                <p>{date.toLocaleString('fr-FR', dateOptions)}</p>
                            <div className="result">
                                <img src={`http://localhost/images/teams/${result.home_team_logo}`} alt="logo équipe domicile" />
                                <h4>{result.home_team_name}</h4>
                                <span>{result.score_home} : {result.score_ext}</span>
                                <h4>{result.ext_team_name}</h4>
                                <img src={`http://localhost/images/teams/${result.ext_team_logo}`} alt="logo équipe extérieur" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ResultList;
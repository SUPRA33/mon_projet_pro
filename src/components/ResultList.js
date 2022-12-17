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

    const date = "2022-03-03T23:00:00.000Z";

    return(
        <section className="results">
            <h2>Nos résultats</h2>
            <div className="container">
                {results.map((result) => {
                    return(
                        <div className="item">
                            <div className="date">
                                <p>{result.date}</p>
                            </div>
                            <div className="result">
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ResultList;
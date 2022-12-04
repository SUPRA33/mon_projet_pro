import { useEffect, useState } from "react";
import ResultDetail from "./ResultDetail";

const ResultList = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        (async() => {
            const getResultsData = await fetch("http://localhost/api/results");
            const resultsData = await getResultsData.json();
            setResults(resultsData[0]);
        })();
    },[]);

    return(
        <ResultDetail results={results}/>
    );
};

export default ResultList;
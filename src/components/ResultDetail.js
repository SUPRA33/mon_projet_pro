const ResultDetail = (props) => {
    return(
        <>
            <p>{props.results.date}</p>
            <p>{props.results.score_home} : {props.results.score_ext}</p>
        </>
    );
};

export default ResultDetail;
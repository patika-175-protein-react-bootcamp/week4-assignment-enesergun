import React from "react";

const DataInformation = ({score, tour, RemainderQuestion}) => {
    return (
        <>
            <div className="score">Score : {score}</div>
            <div className="tour">Tour: {tour}</div>
            <div className="RemainderQuestion">Question : {RemainderQuestion + 1}/10</div>
        </>
    )

}

export default DataInformation;
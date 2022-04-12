import React from "react";

const Question = ({question}) => {
    return (
        <>
            <div >{question.first} x {question.second} ?</div>
        </>
    )
}

export default Question;
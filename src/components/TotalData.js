import React from 'react'


const TotalData = ({ totalPoint, totalQuestion, correctAnswer }) => {
    return (
        <>
        <div className="totalPoint">
                    <p>Total Point: {totalPoint}</p>
                </div>
                <div className="totalQuestions">
                    <p>Total Questions: { totalQuestion ? totalQuestion.length - 1 : 0}</p>
                </div>
                <div className="correctAnswers">
                    <p>Correct Answers: {correctAnswer ? correctAnswer.length : 0}</p>
                </div>
        </>
    )
}

export default TotalData
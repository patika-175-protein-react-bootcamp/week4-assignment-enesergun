import React from 'react';
import {Link} from 'react-router-dom'

const TourDataInformation = ({score, AnsweredQuestion, correctAnswers}) => {
    return (
        <>
        <div className="data">
          <div className="score">Point : {score}</div>
          <div className="questions">Questions : {AnsweredQuestion}</div>
          <div className="correctAnswers">Correct Answers: {correctAnswers}</div>
          <div className="restartButton">
            {/* <StartEllipse /> */}
            <button className=''> <Link className='linkButton' to="/">Restart</Link></button> {/* küçülecek */}
          </div>
        </div>
        </>
    )
}

export default TourDataInformation;
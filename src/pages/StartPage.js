import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { StartEllipse } from '../constants/icons'
import { useGame } from '../context/game'

function StartPage() {
    const { newTour } = useGame();
    let totalPoint = localStorage.getItem('totalPoint') || 0;
    let totalQuestion = JSON.parse(localStorage.getItem('results')) || 0;
    let correctAnswer = JSON.parse(localStorage.getItem('correctAnswers')) || 0;

    return (
        <div className='startPage'>
            <div className="title">Mathematics Game</div>
            <div className="headerUnderLine">
                <svg width="640" height="10" viewBox="0 0 640 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M639.998 1.72994C641.22 -1.50429 12.5197 0.574858 5.18769 1.72994C-2.14435 2.88503 -1.30127 5.72697 5.18769 9.1225C11.6766 12.518 619.626 4.96418 619.626 4.96418C619.626 4.96418 638.776 4.96418 639.998 1.72994Z" fill="#FF0000"/>
                </svg>
            </div>

            <div className="totalData">
                <div className="totalPoint">
                    <p>Total Point: {totalPoint}</p>
                </div>
                <div className="totalQuestions">
                    <p>Total Questions: { totalQuestion ? totalQuestion.length - 1 : 0}</p>
                </div>
                <div className="correctAnswers">
                    <p>Correct Answers: {correctAnswer ? correctAnswer.length : 0}</p>
                </div>
            </div>

            <div className="startButton">
                <StartEllipse />
                <span onClick={() => newTour()}>
                    <Link to="/question">Start</Link>
                </span>
                
            </div>
        </div>
    )
}

export default StartPage
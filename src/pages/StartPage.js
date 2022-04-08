import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { StartEllipse } from '../constants/icons'
import { HeaderUnderLine } from '../constants/icons'
import { useGame } from '../context/game'

function StartPage() {
    const { newTour } = useGame();
    let totalPoint = localStorage.getItem('totalPoint') || 0;
    let totalQuestion = JSON.parse(localStorage.getItem('results')) || 0;
    let correctAnswer = JSON.parse(localStorage.getItem('correctAnswers')) || 0;

    return (
        <div className='startPage'>
            <div className="title">Mathematics Game</div>
            <HeaderUnderLine />

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
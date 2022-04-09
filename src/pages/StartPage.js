import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { StartEllipse } from '../constants/icons'
import { useGame } from '../context/game'
import TotalData from '../components/TotalData'
import Title from '../components/Title'

function StartPage() {
    const { newTour } = useGame();
    let totalPoint = localStorage.getItem('totalPoint') || 0;
    let totalQuestion = JSON.parse(localStorage.getItem('results')) || 0;
    let correctAnswer = JSON.parse(localStorage.getItem('correctAnswers')) || 0;

    return (
        <div className='startPage'>
            <Title title={'Mathematics Game'} />

            <div className="totalData">
                <TotalData totalPoint={totalPoint} totalQuestion={totalQuestion} correctAnswer={correctAnswer} />
            </div>

            <div className="startButton">
                <StartEllipse />
                <span onClick={() => newTour()}>
                    <Link className='linkButton' to="/question">Start</Link>
                </span>
                
            </div>
        </div>
    )
}

export default StartPage
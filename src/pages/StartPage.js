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
            <div className="headerUnderLine">
                <svg width="640" height="10" viewBox="0 0 640 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M639.998 1.72994C641.22 -1.50429 12.5197 0.574858 5.18769 1.72994C-2.14435 2.88503 -1.30127 5.72697 5.18769 9.1225C11.6766 12.518 619.626 4.96418 619.626 4.96418C619.626 4.96418 638.776 4.96418 639.998 1.72994Z" fill="#FF0000"/>
                </svg>
            </div>

            <div className="totalData">
                <TotalData totalPoint={totalPoint} totalQuestion={totalQuestion} correctAnswer={correctAnswer} />
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
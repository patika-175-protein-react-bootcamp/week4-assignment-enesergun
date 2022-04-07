import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { StartEllipse } from '../constants/icons'
import { HeaderUnderLine } from '../constants/icons'
import { useGame } from '../context/game'

function StartPage() {
    const { newTour } = useGame();

    return (
        <div className='startPage'>
            <div className="title">Mathematics Game</div>
            <HeaderUnderLine />

            <div className="totalData">
                <div className="totalPoint">
                    <p>Total Point: 129</p>
                </div>
                <div className="totalQuestions">
                    <p>Total Questions: 40</p>
                </div>
                <div className="correctAnswers">
                    <p>Correct Answers: 32</p>
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
import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import { BoardAndStickMan, Option } from '../constants/icons'
import {useGame} from '../context/game'
import ResultPage from './ResultPage'

function QuestionPage() {
  const [question, setQuestion] = useState({first:0, second:0, result:0})
  const [answer, setAnswer] = useState()
  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(1)
  const {randomQuestion, QuestionAnswers, tour} = useGame();

  useEffect(() => {
    if (questionNumber <=10) {
      setTimeout(() => {
        setQuestion(randomQuestion())
      }, 3000)
    }
    
  }, [questionNumber]);

  const handleAnswer = (option) => {
    
    let result = `${question.first} x ${question.second} = ${question.result}`;

    if (Number(option) === question.result) {
      setAnswer('correct')
      localStorage.setItem('results', JSON.stringify([[result, "correct"]].concat(JSON.parse(localStorage.getItem('results')))));
      setScore(score + Math.ceil(Math.pow(option, 0.5)))
    } else {
      setAnswer('wrong');
      localStorage.setItem('results', JSON.stringify([[result, "wrong"]].concat(JSON.parse(localStorage.getItem('results')))));
    }
    setQuestionNumber(questionNumber + 1);
  }


  
  return (
    <> 
    {
      questionNumber === 11 
      ? <Navigate to="/result" /> /* ??????????????? */
      : (
        <div className={`questionPage ${answer}`}>
          <BoardAndStickMan />
          <div className="data">
            <div className="score">Score : {score}</div>
            <div className="tour">Tour: {tour}</div>
            <div className="questions">Question : {questionNumber}/10</div>
          </div>
          <div className="question">
            <div>{question.first} x {question.second} ?</div>
          </div>
          <button onClick={(e) => handleAnswer(e.target.textContent)}>{(question.first - 1) * question.second}</button>
          <button onClick={(e) => handleAnswer(e.target.textContent)}>{question.first * question.second}</button>
          <button onClick={(e) => handleAnswer(e.target.textContent)} >{question.first * (question.second - 1)}</button>          
        </div>
      ) 
    }
    
    </>
  )
}

export default QuestionPage
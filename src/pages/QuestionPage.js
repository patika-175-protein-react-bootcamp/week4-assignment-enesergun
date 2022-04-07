import React, {useEffect, useState} from 'react'
import { BoardAndStickMan, Option } from '../constants/icons'
import {useGame} from '../context/game'

function QuestionPage() {
  const [question, setQuestion] = useState({first:0, second:0, result:0})
  const [answer, setAnswer] = useState()
  const {randomQuestion, QuestionAnswers} = useGame();

  useEffect(() => {
    setQuestion(randomQuestion());
    
  }, []);

  const handleAnswer = (option) => {
    
    let result = `${question.first} x ${question.second} = ${question.result}`;

    if (Number(option) === question.result) {
      setAnswer('correct')
      localStorage.setItem('results', JSON.stringify([[result, "correct"]].concat(JSON.parse(localStorage.getItem('results'))).slice(0,5)));
    } else {
      setAnswer('wrong');
      localStorage.setItem('results', JSON.stringify([[result, "wrong"]].concat(JSON.parse(localStorage.getItem('results'))).slice(0,5)));
    }
  }
  
  return (
    <div className={`questionPage ${answer}`}>
      <BoardAndStickMan />
      <div className="question">
        <div>{question.first} x {question.second} ?</div>
      </div>
      <button onClick={(e) => handleAnswer(e.target.textContent)}>{(question.first - 1) * question.second}</button>
      <button onClick={(e) => handleAnswer(e.target.textContent)}>{question.first * question.second}</button>
      <button onClick={(e) => handleAnswer(e.target.textContent)} >{question.first * (question.second - 1)}</button>
      
    </div>
  )
}

export default QuestionPage
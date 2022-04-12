import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import {useGame} from '../context/game'
import Option from '../components/Option'
import DataInformation from '../components/DataInformation'
import Question from '../components/Question'


function QuestionPage() {
  const [question, setQuestion] = useState({first:0, second:0, result:0})
  const [answer, setAnswer] = useState()
  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(0)
  const {randomQuestion, tour} = useGame();
  const [buttonDisabled, setButtonDisabled] = useState('');

  useEffect(() => {
    if (questionNumber === 0) {
      setQuestion(randomQuestion());
    }
    else if (questionNumber <=10) {
      setTimeout(() => {
        setQuestion(randomQuestion());
        setAnswer('');
        setButtonDisabled('');
      }, 3000)
    }
    
  }, [questionNumber]);

  const handleAnswer = (option) => {
    
    let result = `${question.first} x ${question.second} = ${question.result}`;

    if (Number(option) === question.result) {
      setAnswer('correct')
      localStorage.setItem('results', JSON.stringify([[result, "correct"]].concat(JSON.parse(localStorage.getItem('results')))));
      setScore(score + Math.ceil(Math.pow(option, 0.5)))
      localStorage.setItem('score', score + Math.ceil(Math.pow(option, 0.5)));
    } else {
      setAnswer('wrong');
      localStorage.setItem('results', JSON.stringify([[result, "wrong"]].concat(JSON.parse(localStorage.getItem('results')))));
    }
    setQuestionNumber(questionNumber + 1);
    setButtonDisabled('disabled');
  }

  const randomOption = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    return random
  }
    
  return (
    <> 
    {
      questionNumber === 10 
      ? <Navigate to="/result" /> /* ??????????????? */
      : (
        <div className={`questionPage ${answer}`}>

          <div className="QuestionData">
            <DataInformation score={score} tour={tour} RemainderQuestion={questionNumber}/>  
          </div>
          
          <div className="question">
            <Question question={question}/>
          </div>          
          
          <div className="OptionButtonWrapper">
            {
              <Option key={0} option={randomOption()} handleAnswer={handleAnswer} buttonDisabled={buttonDisabled} question={question} />              
            }          
          </div>

        </div>
      ) 
    } 
    </>
  )
}

export default QuestionPage
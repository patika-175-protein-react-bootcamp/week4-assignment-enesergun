import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function ResultPage() {
  /* total  */
  const [totalPoint, settTotalPoint] = useState(JSON.parse(localStorage.getItem('totalPoint')))

  /* let total = JSON.parse(localStorage.getItem('totalPoint'))  */
  let tourPoint = JSON.parse(localStorage.getItem('score'));
  useEffect(() => {
    settTotalPoint(tourPoint + totalPoint)
  }, [])
  
  localStorage.setItem('totalPoint', totalPoint);

  let resultsArr = JSON.parse(localStorage.getItem('results')).slice(0, 10).reverse();

  let correctAnswers = resultsArr.filter(item => item[1] === 'correct');
  console.log(correctAnswers);

  return (
    <div className='resultPage'>
      <div className="final">
        <div className="title">Final</div>
        <div className="score">Point : {tourPoint}</div>
        <div className="questions">Questions : {resultsArr.length}</div>
        <div className="correctAnswers">Correct Answers: {correctAnswers.length}</div>
        <button> <Link to="/">Restart</Link></button>
      </div>
      <div className="allQuestion">
        <div className="title">All Question</div>
        {
          resultsArr?.map((item, index) => (
            <div className="question" key={index}>
              <span>{item[0]}</span>
              <span className="answer">{item[1]}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ResultPage
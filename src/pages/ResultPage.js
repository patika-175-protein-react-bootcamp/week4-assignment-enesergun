import React, {useState, useEffect} from 'react'


function ResultPage() {
  /* total  */
  const [totalPoint, setTotalPoint] = useState(0);

  let score = JSON.parse(localStorage.getItem('score'));
  
  console.log(typeof(score));
  
  
  useEffect(() => {
    setTotalPoint(totalPoint + score);
  }, [])
  
  
  console.log(totalPoint);


  return (
    <div className='resultPage'>
      <div className="final">
        <div className="title">Final</div>
        <div className="score">Point : {JSON.parse(localStorage.getItem('score'))}</div>
        <div className="questions">Questions : 0</div>
        <div className="correctAnswers">Correct Answers: 0</div>
      </div>
      <div className="allQuestion">
        <div className="title">All Question</div>
      </div>
    </div>
  )
}

export default ResultPage
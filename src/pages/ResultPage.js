import React, {useState, useEffect} from 'react'
import QuestionResults from '../components/Question'
import Title from '../components/Title'
import TourDataInformation from '../components/TourDataInformation'



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
  localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
  console.log(correctAnswers);



  return (
    <div className='resultPage'>
      <div className="final">
        <Title title={'Final'}/>
        <TourDataInformation score={tourPoint} AnsweredQuestion={resultsArr.length} correctAnswers={correctAnswers.length}/>
        
      </div>

      <div className="allQuestion">
        <Title title={'All Question'} />

        {
          resultsArr?.map((item, index) => (
            <div className="questionResult" key={index}>
              {/* <QuestionResults item={item} /> */}
              <span>{item[0]}</span>
            <span className="answer">
                { 
                  item[1] === 'correct' 
                  ? 
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25977 18.9267C5.61273 21.6994 8.87383 24.543 11.6068 27.9592C12.8074 29.46 12.3118 30.0385 13.4941 27.1952C17.3552 17.9103 20.5776 8.62604 28.9526 2.3448" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  :
                  <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.21545C0.589109 0.405148 1.33416 0 2.23515 0C2.58168 0 2.92822 0.0880763 3.27475 0.264228C4.00248 4.9851 5.52723 9.31843 7.84901 13.2642C9.37376 10.3753 11.2104 6.30623 13.3589 1.05691C14.1906 0.598916 14.849 0.369919 15.3342 0.369919C15.854 0.369919 16.2698 0.422764 16.5817 0.528456C15.8886 2.81843 15.0743 4.94986 14.1386 6.92276C13.203 8.89566 12.3193 10.71 11.4876 12.3659C10.6559 14.0217 10.0495 15.2371 9.66832 16.0122C10.6386 17.2453 11.453 18.2317 12.1114 18.9715C12.8045 19.6762 13.7574 20.416 14.9703 21.1911C16.5644 22.248 18.0718 22.7764 19.4926 22.7764C20.2203 22.7764 20.7228 22.9173 21 23.1992C20.6188 24.397 19.7005 24.9959 18.2451 24.9959C15.8193 24.9959 13.3936 24.0271 10.9678 22.0894C10.0668 21.3496 9.5297 20.9092 9.35644 20.7683C9.21782 20.5921 8.75 20.1165 7.95297 19.3415C7.67574 19.7642 7.27723 20.5041 6.75743 21.561C6.27228 22.6179 5.85644 23.4634 5.5099 24.0976C5.16337 24.6965 4.69554 25.1721 4.10644 25.5244C3.51733 25.8415 2.99752 26 2.54703 26C2.13119 26 1.73267 25.9472 1.35149 25.8415C1.90594 24.6789 2.7203 23.0935 3.79455 21.0854C4.90347 19.0772 5.64851 17.7033 6.0297 16.9634C4.29703 14.2154 2.91089 11.6612 1.87129 9.30081C0.866337 6.90515 0.242574 4.21003 0 1.21545Z" fill="white"/>
                  </svg>
 
                }
            </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ResultPage
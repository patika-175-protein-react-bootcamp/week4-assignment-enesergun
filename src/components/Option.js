import React from "react";
import {useState} from 'react';


const Option = ({key, option, handleAnswer, buttonDisabled, question}) => {
/*   const [optionArr] = useState([(question.first - 1) * question.second, question.first * question.second, question.first * (question.second - 1)]); */


  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  
    
    return ( 
      /* buttonDisabled === 'disabled' 
    ? 
    <>
      <button className='OptionButton first' onClick={(e) => handleAnswer(e.target.textContent)} disabled>{(question.first - 1) * question.second}</button>
      <button className='OptionButton second' onClick={(e) => handleAnswer(e.target.textContent)} disabled>{question.first * question.second}</button>
      <button className='OptionButton third' onClick={(e) => handleAnswer(e.target.textContent)} disabled>{question.first * (question.second - 1)}</button> 
      {
        shuffle([(question.first - 1) * question.second, question.first * question.second, question.first * (question.second - 1)]).map((option, index) => (
          <button className={`OptionButton ${index+1}`} onClick={(e) => handleAnswer(e.target.textContent)} disabled>{option}</button>
        ))
      }

    </>
    : 
    <>
      <button className='OptionButton first' onClick={(e) => handleAnswer(e.target.textContent)} >{(question.first - 1) * question.second}</button>
      <button className='OptionButton second' onClick={(e) => handleAnswer(e.target.textContent)} >{question.first * question.second}</button>
      <button className='OptionButton third' onClick={(e) => handleAnswer(e.target.textContent)} >{question.first * (question.second - 1)}</button> 
      {
        
        shuffle([(question.first - 1) * question.second, question.first * question.second, question.first * (question.second - 1)]).map((option, index) => (                                      
          <button className={`OptionButton ${index+1}`} onClick={(e) => handleAnswer(e.target.textContent)}>{option}</button>                    
        ))

      }
    </>
       */ 
    <>
      {
        shuffle([(question.first - 1) * question.second, question.first * question.second, question.first * (question.second - 1)]).map((option, index) => (
          buttonDisabled === 'disabled'
          ?

          <div className="x" key={index}>
            <button className={`OptionButton`} onClick={(e) => handleAnswer(e.target.textContent)} disabled>{option}</button>
          </div>

          :

          <div className="x" key={index}>
            <button className={`OptionButton`} onClick={(e) => handleAnswer(e.target.textContent)}>{option}</button>
          </div>
          
        ))
      }
    </>  
    )

}

export default Option;